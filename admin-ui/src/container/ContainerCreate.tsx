import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContainerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
