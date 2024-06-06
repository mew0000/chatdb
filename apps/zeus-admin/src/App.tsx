import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataPointList } from "./dataPoint/DataPointList";
import { DataPointCreate } from "./dataPoint/DataPointCreate";
import { DataPointEdit } from "./dataPoint/DataPointEdit";
import { DataPointShow } from "./dataPoint/DataPointShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Zeus"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataPoint"
          list={DataPointList}
          edit={DataPointEdit}
          create={DataPointCreate}
          show={DataPointShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
      </Admin>
    </div>
  );
};

export default App;
