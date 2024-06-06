import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DataPointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
