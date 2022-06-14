import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../redux/strore";

import Header from "../../components/Header/Header";
import classes from "./MainLayout.module.scss";

let store = configureStore();

function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <div className={classes.main_container}>{children}</div>
    </Provider>
  );
}

export default MainLayout;
