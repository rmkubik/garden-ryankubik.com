import React, { useRef } from "react";
import { Link as ReachLink } from "@reach/router";
import { stripIndents } from "common-tags";
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
      <li ref={liRef} onClick={() => liRef.current.querySelector("a").click()}>
        <p>{children[0]}</p>
        {children.slice(1)}
      </li>
    );
  } else {
    return (
      <li ref={liRef} onClick={() => liRef.current.querySelector("a").click()}>
        {children}
      </li>
    );
  }
};

const Seedling = () => <span>🌱</span>;
const Growing = () => <span>🌿</span>;
const Mature = () => <span>🌳</span>;

const Link = ({ to = "", hideDots = false, hideArrow = false, children }) => {
  if (to.includes("http")) {
    return (
      <>
        <a href={to} className="external-link">
          {children}
          {hideDots || "..."}
        </a>
        {hideArrow || <span>➜</span>}
      </>
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

const Wrapper = ({
  children,
  metadata: { template } = { template: "header header header" },
}) => {
  return (
    <div className="content" style={{ gridTemplate: stripIndents(template) }}>
      <Section area="header">
        <h1>
          <Link hideDots={true} hideArrow={true} to="/">
            Ryan Kubik
          </Link>
        </h1>
        <Link hideDots={true} hideArrow={true} to="https://ryankubik.com/blog">
          Blog
        </Link>
        <Link
          hideDots={true}
          hideArrow={true}
          to="https://twitter.com/ryrykubes"
        >
          Twitter
        </Link>
        <Link hideDots={true} hideArrow={true} to="https://rmkubik.itch.io/">
          Games
        </Link>
      </Section>
      {children}
    </div>
  );
};

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
