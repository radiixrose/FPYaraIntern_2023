import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

// import Page from './pages/Main';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [, setData] = useState('');
  const getData = async () => {
    const response = await Axios.get('http://localhost:5000/getData');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          {/* <Page /> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
