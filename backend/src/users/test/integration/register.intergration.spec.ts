import gql from 'graphql-tag';
import { IntergrationTestManager } from '../../../test/intergration-test-manager';
import { User } from '../../entity/user.entity';
import { testNewUser } from '../stubs/new-user.stub';
import request from 'supertest-graphql';
describe('register', () => {
  const intergrationTestManager = new IntergrationTestManager();
  beforeAll(async () => {
    await intergrationTestManager.beforeAll();
  });

  afterAll(async () => {
    await intergrationTestManager.afterAll();
  });

  describe('given that the user does not already exist', () => {
    describe('when a createUser mutation is executed', () => {
      let createdUser: User;

      beforeAll(async () => {
        const response = await request<{ createUser: User }>(
          intergrationTestManager.httpServer,
        )
          .mutate(
            gql`
              mutation CreateUser($newUserInput: NewUserInputDto!) {
                createUser(newUserInput: $newUserInput) {
                  email
                }
              }
            `,
          )
          .variables({
            newUserInput: {
              email: testNewUser.email,
              password: testNewUser.password,
              username: testNewUser.username,
              phoneNumber: testNewUser.phoneNumber,
              confirmPassword: testNewUser.password,
            },
          })
          .expectNoErrors();
        createdUser = response.data.createUser;
      });

      test('then the response should be the newly created user', () => {
        expect(createdUser).toMatchObject({
          email: testNewUser.email,
        });
      });

      test('then the new user should be created', async () => {
        const user = await intergrationTestManager.getUserByUsername(
          testNewUser.username,
        );
        expect(user).toBeDefined();
      });
    });
  });
});
