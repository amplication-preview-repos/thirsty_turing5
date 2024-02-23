import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContainerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
