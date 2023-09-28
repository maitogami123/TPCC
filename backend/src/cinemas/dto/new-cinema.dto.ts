import { Field, InputType } from "@nestjs/graphql";
import { IsAlphanumeric, IsNotEmpty } from "class-validator";

@InputType()
export class NewCinemaDto {
    @Field()
    @IsNotEmpty()
    codeName: string;

    @Field()
    @IsNotEmpty()
    name:string;

    @Field()
    @IsNotEmpty()
    address:string;
}