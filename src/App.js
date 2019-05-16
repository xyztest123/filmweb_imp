import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Register from './components/register/register';
import NotFound from './components/notfound/notFound';
import NewsList from './components/news/newsList';
import NewsDetail from './components/news/newsDetail';
import Login from './components/login/login';
import Logout from './components/logout/logout';
import Category from './components/category/category';
import Movie from './components/movie/movie';
import ArrowUp from './components/arrowUp/arrowUp';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/rejestracja" component={Register} />
            <Route path="/logowanie" component={Login} />
            <Route path="/wyloguj" component={Logout} />
            <Route path="/aktualnosci/:page?" component={NewsList} />
            <Route path="/aktualnosc/:slug" component={NewsDetail} />
            <Route path='/kategoria/:slug/:page?' component={Category} />
            <Route path='/film/:movieTitle' component={Movie} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <ArrowUp />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
