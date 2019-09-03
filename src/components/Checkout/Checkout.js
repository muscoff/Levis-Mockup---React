import React, { Component } from 'react'
import CheckoutNav from './CheckoutNav';
import {NavLink} from 'react-router-dom';
import InputField from '../InputField';
import PasswordField from '../PasswordField';
import Button from '../Button';
import {Redirect} from 'react-router-dom';

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    componentDidMount(){
        let local = localStorage.getItem('cart');
        local = JSON.parse(local) === null ? [] : JSON.parse(local);
        if(local.length === 0){
            this.setState({redirect: true});
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        alert('cool beans');
    }
    render() {
        const {email, password, redirect} = this.state;

        if(redirect){
            return <Redirect to="/product/" />;
        }
        return (
            <div>
                <CheckoutNav />
                {/* break */}
                <div className="width-100 height-10"></div>

                {/* background color cover */}
                <div className="off-white-bg">

                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <div className="font-allerBd"></div>
                </div>

                <div className="width-60 width-s-100 width-m-80 margin-auto border-all-1 white-bg">
                    <div className="width-auto height-10 flex-column justify-content-center align-items-center">
                        <span className="uppercase font-allerBd">checkout</span>
                    </div>

                    <NavLink to="/checkout/add">
                        <div className="width-80 height-8 margin-auto flex-column justify-content-center align-items-center border-all-1 off-white-bg btn">
                            <span className="uppercase font-allerRg">guest checkout</span>
                        </div>
                    </NavLink>
                    {/* break */}
                    <div className="width-auto height-2"></div>

                    <div className="center-text font-allerRg capitalize light-grey-text">or</div>

                    {/* break */}
                    <div className="width-auto height-4"></div>

                    <div className="width-80 margin-auto center-text font-allerRg light-grey-text">
                        Sign in to checkout faster using your saved information.
                    </div>

                    {/* break */}
                    <div className="width-auto height-4"></div>

                    <div className="width-80 margin-auto">
                        <form>
                            <InputField onChange={this.onChange} name="email" value={email} className="transparent border-all-1" label="email" /><br />
                            <PasswordField onChange={this.onChange} name="password" value={password} className="input transparent border-all-1" label="password" /><br /><br />
                            <Button onClick={this.onSubmit} value="sign in" className="width-100 height-8 white-text deep-grey-bg uppercase allerBd" />
                        </form>
                    </div>

                    {/* break */}
                    <div className="width-100 height-5"></div>
                </div>

                    {/* break */}
                    <div className="width-auto height-5"></div>
                </div>
                <div className="width-100 height-5"></div>
            </div>
        )
    }
}

export default Checkout;