import {
  BooleanInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Box } from "@mui/material";

export const AutoEdit = () => (
  <Edit>
    <SimpleForm>
      <Box
        sx={{
          mx: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridColumnGap: "100px",
        }}
      >
        <TextInput source="name" />
        <TextInput source="brand.name" />
        <TextInput source="model.name" />
        <NumberInput source="type" />

        {/* <ArrayInput source="images">
        <SimpleFormIterator>
          <ImageField source="pathS3" />
          <TextInput source="originalImagePath" />
          <TextInput source="mediumImagePath" />
          <TextInput source="smallImagePath" />
          <TextInput source="orderIndex" />
          <TextInput source="id" />
        </SimpleFormIterator>
      </ArrayInput> */}
        <NumberInput source="year" />
        <NumberInput source="ownersCount" />
        <NumberInput source="mileage" />
        <TextInput source="dealer" />
        <TextInput source="price.currency.name" />
        <TextInput source="vin" />
        <TextInput source="location.city" />
        <TextInput source="manufacturer" />
        <DateInput source="firstRegDate" />
        <TextInput source="colors" />
        <TextInput source="bodyType" />
        <DateInput source="fuelType" />
        <DateInput source="transmissionType" />
        <TextInput source="material" />
        <DateInput source="ecoType" />
        <NumberInput source="enginePower" />
        <DateInput source="driveType" />
        <BooleanInput source="isFavorite" />
        <BooleanInput source="booked" />
        <BooleanInput source="blocked" />
        <NumberInput source="literEngineVolume" />
        <BooleanInput source="visible" />
        <TextInput source="additionalInformation" />
        <DateInput source="warranty" />
        <TextInput source="baggageVolume" />
        <TextInput source="backTires" />
        <TextInput source="isClone" />
        <TextInput source="frontTires" />
        <TextInput source="id" />
      </Box>
    </SimpleForm>
  </Edit>
);
