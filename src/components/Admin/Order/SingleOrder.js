import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import {connect} from 'react-redux';
import {singleorder, single_customer} from '../../../actions/homeActions';

class SingleOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            email: this.props.match.params.email
        }
    }
    componentDidMount(){
        let id = this.state.id;
        let email= this.state.email;
        let data = {
            id: id,
            email: email
        }
        this.props.singleorder(data);
        this.props.single_customer(email);
    }
    render() {
        const {first_name, last_name, address, town, state, postal_code, country, number, email} = this.props.customer;
        const row = this.props.singleContent.map((item, index)=>{
            return (
                <React.Fragment key={index}>
                    <div className="col-3 col-s-6 col-m-6 padding-all-10">
                        <div className="img-container-100">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                    <div className="col-9 col-s-6 col-m-6 padding-all-10">
                        <div className="font-allerRg">
                        <span className="font-allerBd capitalize padding-right-10">product name :</span> {item.name}
                        </div>
                        <div className="font-allerRg">
                        <span className="font-allerBd capitalize padding-right-10">quantity :</span> {item.quantity}
                        </div>
                        <div className="font-allerRg">
                        <span className="font-allerBd capitalize padding-right-10">size :</span> {item.size}
                        </div>
                        <div className="font-allerRg">
                        <span className="font-allerBd capitalize padding-right-10">length :</span> {item.length}
                        </div>
                        <div className="font-allerRg">
                        <span className="font-allerBd capitalize padding-right-10">price :</span> {item.price}
                        </div>
                    </div>
                </React.Fragment>
            )
        });
        return (
            <div>
                <AdminNav />

                <TitleCaption title="Order placement View"/>

                <div className="width-100 height-5"></div>

                <div className="row">
                    <div className="col-6 col-s-12 col-m-12">
                        <div className="font-allerBd capitalize blue-text center-text">Items purchased</div>
                        <div className="row">
                                {row}
                        </div>

                    </div>
                    <div className="col-6 col-s-12 col-m-12">
                    <div className="font-allerBd capitalize green-text center-text">Shipping Info</div>
                        <div className="row">
                            <div className="col-6 col-s-12 col-m-6 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={first_name} />
                            </div>
                            <div className="col-6 col-s-12 col-m-6 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={last_name} />
                            </div>
                            <div className="col-12 col-s-12 col-m-12 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={address} />
                            </div>
                            <div className="col-4 col-s-12 col-m-4 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={town} />
                            </div>
                            <div className="col-4 col-s-12 col-m-4 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={state} />
                            </div>
                            <div className="col-4 col-s-12 col-m-4 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={postal_code} />
                            </div>
                            <div className="col-6 col-s-12 col-m-6 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={country} />
                            </div>
                            <div className="col-6 col-s-12 col-m-6 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={email} />
                            </div>
                            <div className="col-12 col-s-12 col-m-12 padding-all-10">
                            <input type="text" className="transparent border-all-1" readonly value={number} />
                            </div>
                        </div>
                    </div>
                </div>
                

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    singleContent: state.home.single_order,
    customer: state.home.single_customer
});

export default connect(mapStateToProps,{singleorder, single_customer})(SingleOrder);