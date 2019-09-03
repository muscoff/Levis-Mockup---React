import React, { Component } from 'react';
import CheckoutNav from './CheckoutNav';
import RequiredInputField from '../RequiredInputField';
import Button from '../Button';
import {Redirect} from 'react-router-dom';
import SideTotal from './SideTotal';

class AddDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            shipping: 10,
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            state: '',
            postalcode: '',
            email: '',
            phone: '',
            country: '',
            msg: '',
            toProduct: false,
            toPay: false
        }
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.setValues();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    setValues = () => {
        let details = localStorage.getItem('userDetails');
        details = JSON.parse(details) === null?{}: JSON.parse(details);

        if(details.firstname === undefined){
        }else{
            this.setState({
                firstname: details.firstname,
                lastname: details.lastname,
                address: details.address,
                city: details.city,
                state: details.state,
                postalcode: details.postalcode,
                email: details.email,
                phone: details.phone,
                country: details.country
            });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        let {firstname, lastname, address, city, state, postalcode, email, phone, country} = this.state;
        
        if(firstname !=='' & lastname !=='' & address !=='' & city !=='' & state !=='' & postalcode !=='' & email !=='' & phone !=='' & country !==''){
            let details = localStorage.getItem('userDetails');
            details = JSON.parse(details) === null ? {} : JSON.parse(details);
            details.firstname = firstname;
            details.lastname = lastname;
            details.address = address;
            details.city = city;
            details.state = state;
            details.postalcode = postalcode;
            details.email = email;
            details.phone = phone;
            details.country = country;
            localStorage.setItem('userDetails', JSON.stringify(details));
            this.setState({toPay: true});
        }else{
            this.setState({
                msg: 'All the input fields are required.'
            });
        }
        
    }
    render() {
        const {shipping, firstname, lastname, address, city, 
            state, postalcode, email, phone, country, msg, toProduct, toPay} = this.state;

        if(toProduct){
            return <Redirect to="/product/" />;
        }

        if(toPay){
            return <Redirect to="/pay/" />;
        }
        return (
            <div>
                <CheckoutNav />
                {/* break */}
                <div className="width-100 height-5"></div>

                {/* background color cover */}
                <div className="off-white-bg">
                    {/* break */}
                    <div className="width-100 height-10"></div>

                    <div className="width-80 width-s-100 margin-auto">
                        <div className="row">
                            <div className="col-7 col-s-12 col-m-12">
                                <div className="padding-all-10 white-bg border-bottom-3-grey">
                                    <div className="font-allerBd uppercase deep-grey-text">1. shipping address</div>
                                </div>

                                <div>
                                    <form>
                                        <div className="padding-all-10 white-bg">
                                            <div className="row">
                                                <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={firstname} name="firstname" label="First Name" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={lastname} name="lastname" label="Last Name" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={address} name="address" label="Address" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={city} name="city" label="Town/City" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-3 col-s-6 col-m-6 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={state} name="state" label="State" />
                                                </div>
                                                <div className="col-3 col-s-6 col-m-6 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={postalcode} name="postalcode" label="Postal Code" />
                                                </div>
                                                <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={email} name="email" label="Email" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={phone} name="phone" label="Phone Number" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="col-12 col-s-12 col-m-12 padding-all-10">
                                                    <RequiredInputField onChange={this.onChange} value={country} name="country" label="Country" className="transparent border-all-1 font-allerRg" />
                                                </div>
                                                <div className="font-allerRg font-12 grey-text padding-all-10">
                                                    Phone number and Email will be used for order delivery updates only
                                                </div>
                                                <div className="font-allerRg red-text padding-all-10">{msg}</div>
                                            </div>
                                        </div>
                                        {/* break */}
                                        <div className="width-100 height-5"></div>

                                        <div className="row">
                                            <div className="col-5 col-s-12 col-m-12">
                                                <Button onClick={this.onSubmit} value="next" className="width-100 height-8 deep-grey-bg white-text uppercase" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-1 col-s-12 col-m-12"></div>

                            <SideTotal shipping={shipping} />

                        </div>

                    </div>
                    
                    {/* break */}
                    <div className="width-auto height-5"></div>
                </div>
                {/* break */}
                <div className="width-auto height-5"></div>
            </div>
        )
    }
}
export default AddDetails;