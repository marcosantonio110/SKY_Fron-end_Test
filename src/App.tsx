import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "~/components/dependencies";
import "~/config/ReactotronConfig";
import Global from "~/styles/global";
import Routes from "~/routes";
import Header from "~/components/templates/Header";
import Footer from "~/components/templates/Footer";

import history from "~/services/history";
import store from "~/store";

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <>
        <Header />
        <Routes />
        <Footer />
      </>
      <Global />
    </Router>
  </Provider>
);

export default App;
