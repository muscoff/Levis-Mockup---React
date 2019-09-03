import React, { Component } from 'react';
import CheckoutNav from './CheckoutNav';
import {Redirect} from 'react-router-dom';
import Button from '../Button';
import {pay} from '../../actions/homeActions';
import {connect} from 'react-redux';
import SideTotal from './SideTotal';

class Pay extends Component {
    constructor(props){
        super(props);
        this.state = {
            shipping: 10,
            toProduct: false,
            fullname: '',
            city: '',
            email: '',
            phone: '',
        }
    }

    componentDidMount(){
        this.setValues();
    }
    setValues = () => {
        let local = localStorage.getItem('cart');
        local = JSON.parse(local) === null ? [] : JSON.parse(local);

        let details = localStorage.getItem('userDetails');
        details = JSON.parse(details) === null ? {} : JSON.parse(details);

        if(local.length===0 | details.firstname === undefined){
            this.setState({toProduct: true});
        }else{
            let fullname = details.firstname + ' '+ details.lastname;
            let city = details.city;
            let email = details.email;
            let phone = details.phone;
            this.setState({
                fullname,
                city,
                email,
                phone,
            });
        }
    }

    onClick = e => {
        e.preventDefault();
        let local = localStorage.getItem('cart');
        local = JSON.parse(local);
        let details = localStorage.getItem('userDetails');
        details = JSON.parse(details);
        let data = {local, shipping: this.state.shipping, email:details.email};
        this.props.pay(data);
    }
    render() {
        console.log(this.props.response);
        const {shipping, toProduct, fullname, city, email, phone} = this.state;

        if(toProduct){
            return <Redirect to="/product/" />;
        }
        return (
            <div>
                <CheckoutNav />

                <div className="width-100 height-5"></div>

                <div className="off-white-bg">
                    {/* break */}
                    <div className="width-100 height-10"></div>

                    <div className="width-80 width-s-100 margin-auto">
                        <div className="row">
                            <div className="col-7 col-s-12 col-m-12">
                                <div className="padding-all-10 white-bg border-bottom-3-grey">
                                    <div className="font-allerBd uppercase deep-grey-text">1. shipping address</div>
                                </div>

                                <div className="font-allerRg white-bg padding-all-10">
                                    <div className="font-allerBd">{fullname}</div>
                                    <div>Address</div>
                                    <div>{city}</div>
                                    <div>{email}</div>
                                    <div>{phone}</div>
                                </div>
                                {/* break */}
                                <div className="width-100 height-5"></div>

                                <div className="padding-all-10 white-bg border-bottom-3-grey">
                                    <div className="font-allerBd uppercase deep-grey-text">2. Pay </div>
                                </div>

                                <div className="white-bg">
                                    <form>
                                        <Button onClick={this.onClick} className="deep-grey-bg white-text font-allerBd margin-top-10" value="Submit Payment" />
                                    </form>
                                </div>
                                {/* break */}
                                <div className="width-100 height-10"></div>
                            </div>
                            <div className="col-1 col-s-12 col-m-12"></div>
                            <SideTotal shipping={shipping} />
                        </div>
                    </div>
                    <div className="width-auto height-5"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    response: state.home.pay
});

export default connect(mapStateToProps,{pay})(Pay);