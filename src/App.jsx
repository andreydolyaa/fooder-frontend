

import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { RestDetails } from './pages/RestDetails/RestDetails';
import Scroll from './cmps/Scroll/Scroll';
import { Checkout } from './pages/Checkout/Checkout';
import RedirectPage from './cmps/RedirectPage/RedirectPage';
import { Signup } from './pages/Signup/Signup';
import { Login } from './pages/Login/Login';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { AppFooter } from './cmps/AppFooter/AppFooter';
import { CreateRestaurant } from './pages/CreateRestaurant/CreateRestaurant';
import { LoadingCreate } from './cmps/LoadingCreate/LoadingCreate';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';




export function App(props) {

    return (
        <div className="App">
            <Router>
                <AppHeader />
                <Scroll />
                <Switch>
                    <Route path="/restaurant/:id" render={props => <RestDetails {...props} />}></Route>
                    <Route exact path="/order-process" component={RedirectPage}></Route>
                    <Route exact path="/user-details" component={UserDetails}></Route>
                    <Route exact path="/restaurant-register" component={CreateRestaurant}></Route>
                    <Route exact path="/checkout" component={Checkout}></Route>
                    <Route exact path="/creating" component={LoadingCreate}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route excat path="/signup" component={Signup}></Route>
                    <Route excat path="/login" component={Login}></Route>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
                <AppFooter />
            </Router>
        </div>
    );
}



// <Route path="/cart" component={Cart}></Route>


