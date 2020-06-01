import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Opening from './components/Opening';
import More from './components/More'
import Navbar from './components/Navbar'
import Title from './components/Title'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import About from './components/pages/About';
// import AddArticle from './components/AddArticle';

// React-router-Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return(
      /*Provider from React and Router from React-Dom first*/
      <Provider store={store}>
        <Router>
        <Switch>
          <Route path="/list">
            <React.Fragment>
              <Title/>
              <Opening/>
              <Navbar/>
              <ArticleList/>
              <More/>
            </React.Fragment>
          </Route>
          <Route path="/about">
            <React.Fragment>
              <Title/>
              <Navbar/>
              <About/>
            </React.Fragment>
          </Route>
        </Switch>                
        </Router>
      </Provider>
    )
  };
}

export default App;