import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Opening from './components/Opening';
import More from './components/More'
import Navbar from './components/Navbar'
import Title from './components/Title'
// import AddArticle from './components/AddArticle';
//Pages Import
import About from './components/pages/About';

// React-router-Dom
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/">
            <React.Fragment>
              <Title/>
              <Opening/>
              <Navbar/>
              <ArticleList/>
              <More/>
            </React.Fragment>
          </Route>
          <Route exact path="/about">
            <React.Fragment>
              <Title/>
              <Navbar/>
              <About/>
            </React.Fragment>
          </Route>
        </Switch>
    )
  };
}

export default App;