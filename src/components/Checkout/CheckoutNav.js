import React, { Component } from 'react';
import Logo from '../Logo';
import {NavLink} from 'react-router-dom';

class CheckoutNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.cartInfo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    cartInfo = () => {
        let local = localStorage.getItem('cart');
        local = JSON.parse(local) === null ? []: JSON.parse(local);
        let number = 0;
        if(local.length > 0){
            for(let i=0; i<local.length; i++){
                number = number + parseInt(local[i].quantity);
            }
        }else{
            number = 0;
        }
        this.setState({number});
    }
    render() {
        const {number} = this.state;
        return (
            <div className="fixed width-100 height-10 flex-row border-bottom-1 z-index-1 white-bg">
                <Logo />

                <div className="width-80 width-s-60 width-m-60 height-auto">
                    <div className="width-auto height height-auto flex-column justify-content-center align-items-center">
                        <span className="font-allerBd deep-grey-text uppercase">secure checkout</span>
                    </div>
                </div>

                <div className="width-10 width-s-20 width-m-20 height-auto">
                    <div className="full flex-row align-items-center">
                        <NavLink to="/viewcart/" target="blank">
                            <span>Cart</span>(<span id="cart">{parseInt(number)}</span>)
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutNav;