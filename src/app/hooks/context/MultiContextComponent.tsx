'use client';
import React, { useState, useContext, createContext } from 'react';
import './style.css';

interface LoginButtonProps {
  text: string;
  children?: React.ReactElement;
}

interface Credentials {
  name: string;
  password: string;
}

interface ContextProps {
  credentials?: Credentials;
  setCredentials?: any;
}

const CredentialsContext = createContext<ContextProps>(null);

const ThemeContext = createContext<string>(null);

const ThemeSelect: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark theme
      </label>
    </>
  );
};
const handleLogin = (e, credentials: Credentials) => {
  console.log(credentials);
};

const LoginButton: React.FC<LoginButtonProps> = ({ text, children }) => {
  const { credentials, setCredentials } = useContext(CredentialsContext);
  return <button onClick={(e) => handleLogin(e, credentials)}>{text}</button>;
};

interface LoginFormProps {
  children?: React.ReactElement | React.ReactElement[];
}

const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  const { credentials, setCredentials } = useContext(CredentialsContext);
  const theme = useContext(ThemeContext);
  console.log(theme);
  const themeclass = 'panel-' + theme;

  return (
    <section className={themeclass}>
      <input
        type='text'
        id='name'
        value={credentials?.name}
        onChange={(e) =>
          setCredentials({ ...credentials, name: e.target.value })
        }
      />
      <input
        id='password'
        type='text'
        value={credentials?.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
    </section>
  );
};

const MultiContextComponent: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    name: '',
    password: '',
  });

  const [theme, setTheme] = useState('light');

  return (
    <CredentialsContext.Provider value={{ credentials, setCredentials }}>
      <ThemeContext.Provider value={theme}>
        <LoginForm />
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark theme
        </label>
      </ThemeContext.Provider>
      <LoginButton text='Log in' />
    </CredentialsContext.Provider>
  );
};

export { MultiContextComponent };
