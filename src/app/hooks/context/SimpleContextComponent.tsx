'use client';
import React, { createContext, useContext, useState } from 'react';
import './style.css';

const ThemeContext = createContext<string>('light');

const SimpleContextComponent = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            e.target.checked === true ? setTheme('dark') : setTheme('light');
          }}
        />
        dark theme
      </label>
    </ThemeContext.Provider>
  );
};

interface FormProps {
  children?: React.ReactElement;
}

interface ButtonProps {
  text: string;
  children?: React.ReactElement;
}

interface PanelProps {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <Panel title='Welcome'>
      <Description text='this demos useContext hook'>
        <text>Yes it does</text>
      </Description>
      <Button text='Sign up' />
      <Button text='Log in' />
    </Panel>
  );
};

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{text}</button>;
};

interface DescriptionProps {
  text: string;
  children?: React.ReactElement;
}
const Description: React.FC<DescriptionProps> = ({ text, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p>
        <b>{text}</b>
        <br />
        <code>{children}</code>
      </p>
      <p>Current mode is {theme}</p>
    </>
  );
};
export { SimpleContextComponent };
