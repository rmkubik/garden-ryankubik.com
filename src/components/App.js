import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Router } from "@reach/router";
import "../codepen";

import * as layoutComponents from "./layout";
const { ListItem, Wrapper, ...shortcodes } = layoutComponents;

import pages from "../../pages/**/*.mdx";

const pageEntries = Object.entries(pages);
const routes = [];
while (pageEntries.length > 0) {
  let [key, entry] = pageEntries.pop();

  if (key === "index") {
    key = "/";
  }

  if (entry.__esModule) {
    routes.push([key, entry.default]);
    continue;
  }

  const entries = Object.entries(entry).map((ent) => {
    if (ent[0] === "index") {
      return [`/${key}`, ent[1]];
    }

    return [`/${key}/${ent[0]}`, ent[1]];
  });
  pageEntries.push(...entries);
}

const components = {
  li: ListItem,
  wrapper: Wrapper,
  ...shortcodes,
};

const App = () => {
  return (
    <MDXProvider components={components}>
      <Router>
        {routes.map(([key, Route]) => {
          return <Route key={key} path={key} />;
        })}
      </Router>
    </MDXProvider>
  );
};

export default App;
