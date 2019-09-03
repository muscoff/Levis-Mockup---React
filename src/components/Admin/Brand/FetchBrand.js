import React, { Component } from 'react'
import {connect} from 'react-redux';
import {brand, deletebrand} from '../../../actions/homeActions';
import {NavLink} from 'react-router-dom';

class FetchBrand extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.brand();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    onDelete = id => {
        this.props.deletebrand(id);
    }
    render() {
        const trow = this.props.brandContent.map(item=>{
            return(
                <tr key={item.brand}>
                    <td className="center-text cursor-pointer font-20 font-allerRg">
                        <NavLink to={"/admin/brand/edit/"+item.brand+"/"+item.id}>
                            <span className="yellow-hover">-</span>
                        </NavLink>
                    </td>
                    <td className="font-allerRg">{item.brand}</td>
                    <td className="center-text cursor-pointer font-20 font-allerRg">
                        <span className="yellow-hover" onClick={()=>this.onDelete(item.id)}>x</span>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <div className="width-40 width-s-100 width-m-90 padding-all-10 margin-auto">
                    <table className="table bordered light-grey-bg">
                        <thead>
                            <tr>
                                <th></th><th>Brand</th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {trow}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    brandContent: state.home.brand,
    response: state.home.response
});

export default connect(mapStateToProps,{brand, deletebrand})(FetchBrand);