import React, {Component} from 'react';
import Search from "../search/search";
import Items from "../items";
import './app.css';

export default class App extends Component{

    render = () => {
      return (
          <div>
              <Search />
              <Items />
          </div>
      );
    };
};