import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import AdminLogin from '../components/Admin/AdminLogin/AdminLogin';
import Dashboard from '../components/Admin/Dashboard/Dashboard';
import Brand from '../components/Admin/Brand/Brand';
import Categories from '../components/Admin/Categories/Categories';
import Product from '../components/Admin/Product/Product';
import FrontProduct from '../components/Product/FrontProduct';
import Order from '../components/Admin/Order/Order';
import SingleOrder from '../components/Admin/Order/SingleOrder';
import Settings from '../components/Admin/Settings/Settings';
import EditBrand from '../components/Admin/Brand/EditBrand';
import EditCategory from '../components/Admin/Categories/EditCategory';
import AddProduct from '../components/Admin/Product/AddProduct';
import EditProduct from '../components/Admin/Product/EditProduct';
import ProductImages from '../components/Admin/Product/ProductImages';
import View from '../components/View/View';
import ViewCart from '../components/ViewCart/ViewCart';
import Checkout from '../components/Checkout/Checkout';
import AddDetails from '../components/Checkout/AddDetails';
import Pay from '../components/Checkout/Pay';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props)=>(
      fakeAuth.isAuthenticated === true
      ? <Component {...props} /> : <Redirect to={{
        pathname: '/admin/login',
        state : { from: props.location}
      }} />
    )} 
    />
  )

class PageRoute extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Router>
                        <Switch>
                            <Route exact strict path="/" component={Home} />
                            <Route exact strict path="/product/" component={FrontProduct} />
                            <Route exact strict path="/product/:id" component={FrontProduct} />
                            <Route exact strict path="/product/search/:name" component={FrontProduct} />
                            <Route exact strict path="/view/:id" component={View} />
                            <Route exact strict path="/viewcart/" component={ViewCart} />
                            <Route exact strict path="/checkout/" component={Checkout} />
                            <Route exact strict path="/checkout/add" component={AddDetails} />
                            <Route exact strict path="/pay/" component={Pay} />
                            <Route exact strict path="/admin/login" render={()=>(<AdminLogin fake={fakeAuth}/>)} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/" component={Dashboard} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/brand" component={Brand} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/categories" component={Categories} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/product" component={Product} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/product/add" component={AddProduct} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/product/images/:id" component={ProductImages} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/product/edit/:id/:parent" component={EditProduct} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/order" component={Order} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/order/:id/:email" component={SingleOrder} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/settings" component={Settings} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/brand/edit/:brand/:id" component={EditBrand} />
                            <PrivateRoute exact strict fake={fakeAuth} path="/admin/category/edit/:id" component={EditCategory} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </div>
        );
    }
}

export default PageRoute;