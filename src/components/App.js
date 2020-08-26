import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Router } from "@reach/router";
import "../codepen";

import { Center, Section, ListItem, Wrapper } from "./layout";

import Index from "../../pages/index.mdx";
import Test from "../test.mdx";

console.log(Index);

const components = {
  li: ListItem,
  wrapper: Wrapper,
};

const App = () => {
  return (
    <MDXProvider components={components}>
      <Router>
        <Index path="/" />
        <Test path="/test" />
      </Router>
    </MDXProvider>
  );
};

export default App;
