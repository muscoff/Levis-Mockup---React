import React, { Component } from 'react';
import {connect} from 'react-redux';
import {order} from '../../../actions/homeActions';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import {NavLink} from 'react-router-dom';

class Order extends Component {
    componentDidMount(){
        this.props.order();
    }
    render() {
        const row = this.props.orderContent.map(item=>{
            return (
                <tr key={item.id} className="font-allerRg">
                    <td className="center-text">{item.customer_id}</td>
                    <td>{item.email}</td>
                    <td>{item.created_at}</td>
                    <td>
                        <NavLink to={"/admin/order/"+item.id+"/"+item.email} className="red-hover">
                            View
                        </NavLink>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <AdminNav />

                <TitleCaption title="Order Placement" />
                {/* break */}
                <div className="width-100 height-5"></div>

                <div className="width-50 width-s-100 width-m-90 margin-auto">
                    <table className="table bordered">
                        <thead className="capitalize font-allerBd">
                            <tr>
                                <th>Customer id</th><th>Email</th><th>date</th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {row}
                        </tbody>
                    </table>
                </div>

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orderContent: state.home.order
});

export default connect(mapStateToProps,{order})(Order);