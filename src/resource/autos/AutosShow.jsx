import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Box } from "@mui/material";

export const AutoShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ArrayField source="images">
        <Datagrid>
          <TextField source="pathS3" />
          <TextField source="originalImagePath" />
          <TextField source="mediumImagePath" />
          <TextField source="smallImagePath" />
          <TextField source="orderIndex" />
          <TextField source="id" />
        </Datagrid>
      </ArrayField>
      <NumberField source="year" />
      <NumberField source="mileage" />
      <TextField source="price.currency.name" />
      <TextField source="location.city" />
      <DateField source="firstRegDate" />
      <DateField source="fuelType" />
      <DateField source="transmissionType" />
      <NumberField source="enginePower" />
      <DateField source="driveType" />
      <BooleanField source="isFavorite" />
      <NumberField source="literEngineVolume" />
      <BooleanField source="visible" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
