import React, { Component } from 'react';
import Directory from './Product';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import {ITEMS} from '../shared/Product';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items:ITEMS
        };
    }
  render() {
      return (
          <div >
              <Header/>
              <Directory items={this.state.items}/>
              <Footer/>
          </div>
          
      );
  }
}

export default Main;
