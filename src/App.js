import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WindowSizes from './components/WindowSizes';
import CounterPage from './pages/CounterPage';
import Header from './components/Header';
import Calendar from './components/Calendar';
import UserLoader from './components/UserLoader';
import PhonesLoader from './components/PhonesLoader';
import MouseTrackerPage from './pages/MouseTrackerPage';
import Tree from './components/Tree';
import Home from './pages/Home';
import { UserContext, ThemeContext } from './contexts';
import SignUpForm from './components/SignUpForm';

import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;

console.log(UserContext);

function App (props) {
  const [user, SetUser] = useState({
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    email: 'johndoe@gmail.com',
    imageSrc: 'https://i.ytimg.com/vi/L3wKzyIN1yk/maxresdefault.jpg',
  });
  const themeState = useState(THEMES.DARK);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeState}>
        <UserContext.Provider value={user}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/about' component={About} />
            <Route path='/counter' component={CounterPage} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/users' component={UserLoader} />
            <Route path='/phones' component={PhonesLoader} />
            <Route path='/tracker' component={MouseTrackerPage} />
            <Route path='/user' component={Tree} />
            <Route path='*' component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
const About = props => {
  console.log('ABOUT: ', props);

  setTimeout(() => {
    props.history.push('/');
  }, 5000);

  return <div>About</div>;
};
const Contacts = props => {
  console.log('CONTACTS: ', props);
  return <div>Contacts</div>;
};

const NotFound = () => <div>Error 404. Page not found.</div>;

export default App;
