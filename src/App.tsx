import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import dataProvider from "./dataProvider";
import { AutoList } from "./resource/autos/AutosList";
import { AutoEdit } from "./resource/autos/AutosEdit";
import { AutoCreate } from "./resource/autos/AutosCreate";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="autos"
        list={AutoList}
        edit={AutoEdit}
        create={AutoCreate}
      />
    </Admin>
  );
};
