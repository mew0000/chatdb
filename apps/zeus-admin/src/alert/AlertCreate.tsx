import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" source="message" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <NumberInput label="TriggerValue" source="triggerValue" />
      </SimpleForm>
    </Create>
  );
};
