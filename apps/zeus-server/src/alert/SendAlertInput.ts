import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class SendAlertInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    Message!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    TriggerValue!: number;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    Timestamp?: Date;
}

export { SendAlertInput as SendAlertInput };