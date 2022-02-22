import React, {Component} from 'react';
import Menu from './Menu';
import Header from './header';
import Footer from './footer';
import { Route, Routes } from "react-router-dom";
import Home from './home';


class Main extends Component {
    render(){

      const Homepage = () =>{
        <Home />
      }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' component={Homepage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
      </Routes>
      <Footer />
    </div>
  );
}
}

export default Main;
