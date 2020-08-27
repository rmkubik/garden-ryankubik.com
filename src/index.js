import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import "./main.scss";
import App from "./components/App";

// https://reactjs.org/docs/react-dom-server.html
// use the above react dom server to create a parcel plugin
// read the pages directory
// renderToString each page and create actual HTML files
// then use hydrate instead of render below
//
// BIG Q - how do we render/hydrate individual pages for the router?
// We could ditch the router and just create actual static pages?
//
// separate concern - put a published, and last edited timestamp
// on each page based on git history

ReactDOM.render(<App />, document.getElementById("root"));
