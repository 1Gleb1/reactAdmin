import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  List,
  NumberField,
  ShowButton,
  DeleteButton,
  TextField,
} from "react-admin";

export const AutoList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      {/* <ArrayField source="images">
        <SingleFieldList>
          <ChipField source="pathS3" />
        </SingleFieldList>
      </ArrayField> */}
      <NumberField source="year" />
      <NumberField source="mileage" />
      <TextField source="price.currency.name" />
      <TextField source="location.city" />
      <DateField source="firstRegDate" />
      <NumberField source="fuelType" />
      <NumberField source="transmissionType" />
      <NumberField source="enginePower" />
      <NumberField source="driveType" />
      <BooleanField source="isFavorite" />
      <NumberField source="literEngineVolume" />
      <BooleanField source="visible" />
      <TextField source="id" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
