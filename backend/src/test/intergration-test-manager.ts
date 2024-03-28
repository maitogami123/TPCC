import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { AuthService } from '../auth/auth.service';
import { testUser } from '../users/test/stubs/user.stub';
import { UsersService } from '../users/users.service';

export class IntergrationTestManager {
  public httpServer: any;
  private app: INestApplication;
  private accessToken: string;

  async beforeAll(): Promise<void> {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    this.app = moduleRef.createNestApplication();
    await this.app.init();
    this.httpServer = this.app.getHttpServer();
    const authService = this.app.get<AuthService>(AuthService);

    const tokens = await authService.signIn(
      testUser.username,
      testUser.password,
    );
    this.accessToken = tokens.access_token;
  }

  async afterAll(): Promise<void> {
    this.app.close();
  }

  async getUserByUsername(username: string) {
    return await this.app
      .get<UsersService>(UsersService)
      .getUserByUsername(username);
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
