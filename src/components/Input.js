import React, { Component } from 'react';
import SearchField from './SearchField';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {} from '../actions/homeActions';

class Input extends Component {
    state = {
        search: '',
        cart: []
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{
            var local = localStorage.getItem('cart');
            local = JSON.parse(local) === null?[]:JSON.parse(local);
            this.setState({
                cart: local
            });
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    onKeyDown = e => {
        let search = this.state.search;
        this.props.onKeyDown(e, search);
    }
    render() {
        const {search, cart} = this.state;
        const {display} = this.props;
        let number = 0;
        if(cart.length > 0){
            for(let i=0; i<cart.length; i++){
                number = number + parseInt(cart[i].quantity);
            }
        }else{
            number = 0;
        }
        return (
            <div className="width-30 width-s-80 width-m-80" id="navInput">
                <div className="full flex-row align-items-center">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <div className={display?display:''}>
                                <SearchField name="search" onChange={this.onChange} value={search} onKeyDown={this.onKeyDown} />
                            </div>
                        </div>
                        <div className="col-3">
                            <NavLink to="/viewcart/">
                                <span className="padding-left-10">Cart</span>(<span id="cart">{parseInt(number)}</span>)
                            </NavLink>
                        </div>	
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartItem: state.home.cart
});

export default connect(mapStateToProps,{})(Input);