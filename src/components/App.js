import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../codepen";

import { Center, Section, ListItem } from "./layout";

import Index from "../../pages/index.mdx";

console.log(Index);

const components = {
  li: ListItem,
};

const App = () => {
  return (
    <MDXProvider components={components}>
      <Section area="header">
        <h1>Ryan Kubik</h1>
        <div>Blog</div>
        <div>Twitter</div>
        <div>Games</div>
      </Section>
      <Index />
    </MDXProvider>
  );
};

export default App;
