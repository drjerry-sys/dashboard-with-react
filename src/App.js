import React from 'react';
import Topbar from './components/Topbar/Topbar';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import UserList from './components/pages/UserList/UserList';
import Home from './components/pages/Home/Home';
import User from './components/pages/User/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewUser from './components/pages/NewUser/NewUser';
import ProductList from './components/pages/ProductList/ProductList';
import Product from './components/Product/Product';
import NewProduct from './components/pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;