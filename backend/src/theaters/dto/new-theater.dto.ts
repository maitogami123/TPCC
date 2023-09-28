import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class NewTheaterDto {
    
    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    cinemaCodeName: string;
}