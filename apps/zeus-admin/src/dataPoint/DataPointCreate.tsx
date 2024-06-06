import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DataPointCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
