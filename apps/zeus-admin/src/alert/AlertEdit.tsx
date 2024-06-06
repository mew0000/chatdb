import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Message" source="message" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <NumberInput label="TriggerValue" source="triggerValue" />
      </SimpleForm>
    </Edit>
  );
};
