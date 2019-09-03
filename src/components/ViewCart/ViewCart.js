import React, { Component } from 'react';
import TopNav from '../TopNav';
import Nav from '../Nav';
import {NavLink} from 'react-router-dom';
import InputField from '../SearchField';

export default class ViewCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            promo: '',
            cart: [],
            total: null
        }
    }
    componentDidMount(){
        this.cart();
    }

    cart = () => {
        let local = localStorage.getItem('cart');
        local = JSON.parse(local) === null?[]:JSON.parse(local);
        this.setState({cart: local});

        let total = 0;
        if(local.length !== 0){
            for(let i=0; i<local.length; i++){
                total = total + local[i].total;
            }
            this.setState({total: total.toFixed(2)});
        }else{
            this.setState({total: 0});
        }
    }

    removeItem = index => {
        let copy = this.state.cart.slice();
        copy.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(copy));
        this.cart();
    }

    onChange = (e, i) => {
        let quantity = e.target.value;
        if(quantity !== '' & quantity !==isNaN(quantity)){
            let copy = this.state.cart.slice();
            copy[i].quantity = quantity;
            copy[i].total = copy[i].quantity * copy[i].price;
            localStorage.setItem('cart', JSON.stringify(copy));
            this.cart();
        }
    }
    render() {
        let {cart, total} = this.state;
        const cartInfo = cart.length === 0?<div className="font-allerRg center-text blue-text">Your cart is empty. Please purchase some items. Happy shopping!!</div>
        :cart.map((cartItems, index)=>{
            return (
                <React.Fragment key={cartItems.id}>
                    <div className="col-3 col-s-6 col-m-6 padding-all-10">
						<div className="img-container-100">
							<img src={cartItems.image} alt="" />
						</div>
					</div>
                    <div className="col-9 col-s-6 col-m-6">
						<div className="row">
							<div className="col-6 col-s-12 col-m-12 padding-all-10 font-allerRg">
								<div className="capitalize font-20 font-s-15">{cartItems.title}</div>
								<div className="font-20 font-s-15">$<span>{cartItems.price}</span></div>
								<div className="margin-top-10 deep-grey-text font-s-12">Size: <span>{cartItems.size}</span></div>
								<div className="margin-top-10 deep-grey-text capitalize font-s-12">subtotal: <span className="subtotal">{cartItems.total}</span></div>
							</div>
							<div className="col-6 col-s-12 col-m-12">
								<div><input onChange={(e)=>this.onChange(e, index)} className="input quantity" type="text" defaultValue={cartItems.quantity} /></div>
								<div onClick={()=>this.removeItem(index)} className="deep-grey-text font-allerRg capitalize margin-top-10 right-text cursor-pointer">
									remove
								</div>
								<div className="info" data-id="" data-size="" data-quantity="" data-length=""></div>
							</div>
						</div>
					</div>
                </React.Fragment>
            )
        });
        //console.log(cart);
        return (
            <div>
                <TopNav />
                <Nav display="display-none" />
                <div className="width-100 height-10 flex-column justify-content-center align-items-center font-allerBd font-20 uppercase deep-grey-text">
                    shopping bag	
                </div>

                <div className="row">
                    <div className="col-8 col-s-12 col-m-12 col-l-12 padding-all-10">
                        <div className="row" id="item-list">{cartInfo}</div>
                    </div>

                    <div className={cart.length === 0?'display-none':'col-4 col-s-12 col-m-12 col-l-12 padding-all-10'} id="checkout">
                        <NavLink to="/checkout/">
                            <div className="width-auto height-10 flex-column justify-content-center align-items-center uppercase red-bg white-text font-allerBd font-20 btn cursor-pointer">checkout</div>
                        </NavLink>

                        {/* Promo code */}
                        <div className="width-auto height-20 padding-all-10 margin-top-10 border-all-1">
                            <div className="uppercase font-allerBd font-20">promo code</div>
                            <div className="flex-row">
                                <div className="width-60 width-s-50 padding-all-10"><InputField name="promo" /></div>
                                <div className="width-40 width-s-50 padding-all-10">
                                    <div className="btn uppercase font-allerBd input cursor-pointer">apply now</div>
                                </div>
                            </div>
                        </div>

                        <div className="padding-all-10 font-allerBd light-grey-bg border-all-1">
                            <div className="flex-row">
                                <div className="col-9"><div className="capitalize">subtotal</div></div>
                                <div className="col-3"><div className="capitalize overflow-hidden"><span id="subtotal">{total}</span></div></div>
                            </div>
                            <div className="flex-row">
                                <div className="col-6"><div className="capitalize">shipping</div></div>
                                <div className="col-6"><div className="capitalize">Proceed to see options</div></div>
                            </div>
                        </div>

                        <div className="padding-all-10 font-allerBd border-all-1">
                            <div className="flex-row">
                                <div className="col-9"><div className="capitalize">total</div></div>
                                <div className="col-3"><div className="capitalize overflow-hidden"><span id="total">{total}</span></div></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
