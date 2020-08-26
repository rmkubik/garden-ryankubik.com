import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Router } from "@reach/router";
import "../codepen";

import { ListItem, Wrapper } from "./layout";

import Index from "../../pages/index.mdx";
import RandomnessUtils from "../../pages/randomness-utils.mdx";

const components = {
  li: ListItem,
  wrapper: Wrapper,
};

const App = () => {
  return (
    <MDXProvider components={components}>
      <Router>
        <Index path="/" />
        <RandomnessUtils path="/randomness-utils" />
      </Router>
    </MDXProvider>
  );
};

export default App;
