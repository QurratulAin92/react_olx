import React from 'react';
import './App.css';
import Logo from "./logo"
import {Picture,Picture2, Picture3} from "./pic"
import Header from "./header"
import Cards from './card'
import {Footer,Footer2} from "./footer"
import AppRouter from './router'


class App extends React.Component{
  render(){
    return(
      <AppRouter />
    )
  }
}
export default App;


