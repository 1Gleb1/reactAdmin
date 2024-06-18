import {
  BooleanInput,
  Create,
  DatagridInput,
  NumberInput,
  SimpleForm,
  TextInput,
  ImageInput,
} from "react-admin";

export const AutoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      {/* <ArrayInput source="images"> */}
      <ImageInput source="pathS3" />
      {/* <SingleFieldList>
          <ChipField source="pathS3" />
        </SingleFieldList> */}
      {/* </ArrayInput> */}
      <NumberInput source="year" />
      <NumberInput source="mileage" />
      <TextInput source="price.currency.name" />
      <TextInput source="location.city" />
      <DatagridInput source="firstRegDate" />
      <NumberInput source="fuelType" />
      <NumberInput source="transmissionType" />
      <NumberInput source="enginePower" />
      <NumberInput source="driveType" />
      <BooleanInput source="isFavorite" />
      <NumberInput source="literEngineVolume" />
      <BooleanInput source="visible" />
      <TextInput source="id" />
    </SimpleForm>
  </Create>
);
