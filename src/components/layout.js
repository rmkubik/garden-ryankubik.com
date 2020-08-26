import React from "react";
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
  if (Array.isArray(children)) {
    return (
      <li>
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

const Link = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

const EmailSignup = () => {
  return (
    <div className="email-input">
      <input />
      <button>Subscribe</button>
    </div>
  );
};

const Wrapper = ({ children }) => (
  <div className="content">
    <Section area="header">
      <h1>Ryan Kubik</h1>
      <div>Blog</div>
      <div>Twitter</div>
      <div>Games</div>
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
