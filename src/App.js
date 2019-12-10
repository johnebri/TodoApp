import React, { Component } from 'react';



import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';

import Post from './components/Post';

class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="todo-app container">
              <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/admin' component={Admin} />
              <Route exact path='/:post_id' component={Post} />
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
