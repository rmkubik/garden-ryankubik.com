import React, { useRef } from "react";
import { Link as ReachLink } from "@reach/router";
import "../codepen";

const Center = ({ children }) => {
  return <div className="center">{children}</div>;
};

const Section = ({ children, area, color = "white" }) => {
  return (
    <section
      className={area}
      style={{ gridArea: area, backgroundColor: color }}
    >
      {/* <span>🔗</span> */}
      {children}
    </section>
  );
};

const Icon = ({ children }) => <span className="icon">{children}</span>;

const ListItem = ({ children }) => {
  const liRef = useRef();

  if (Array.isArray(children)) {
    return (
      <li
        ref={liRef}
        onClick={() => liRef.current.querySelector("p > *").click()}
      >
        <p>{children[0]}</p>
        {children.slice(1)}
      </li>
    );
  } else {
    return <li>{children}</li>;
  }
};

const Seedling = () => <span>🌱</span>;
const Growing = () => <span>🌿</span>;
const Mature = () => <span>🌳</span>;

const Link = ({ to = "", hideDots = false, children }) => {
  if (to.includes("http")) {
    return (
      <a href={to}>
        {children}
        {hideDots || "..."}
      </a>
    );
  } else {
    return (
      <ReachLink to={to}>
        {children}
        {hideDots || "..."}
      </ReachLink>
    );
  }
};

const EmailSignup = () => {
  return (
    <div className="email-input">
      <input />
      <button>Subscribe</button>
    </div>
  );
};

const Wrapper = ({ children, metadata: { template } = {} }) => (
  <div className="content" style={{ gridTemplate: template }}>
    <Section area="header">
      <h1>
        <Link hideDots={true} to="/">
          Ryan Kubik
        </Link>
      </h1>
      <Link hideDots={true} to="https://ryankubik.com/blog">
        Blog
      </Link>
      <Link hideDots={true} to="https://twitter.com/ryrykubes">
        Twitter
      </Link>
      <Link hideDots={true} to="https://rmkubik.itch.io/">
        Games
      </Link>
    </Section>
    {children}
  </div>
);

export {
  Center,
  Section,
  Icon,
  ListItem,
  Seedling,
  Growing,
  Mature,
  Link,
  EmailSignup,
  Wrapper,
};
