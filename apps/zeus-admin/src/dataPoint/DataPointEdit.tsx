import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DataPointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
