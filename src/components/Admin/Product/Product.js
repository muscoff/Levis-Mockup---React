import React, { Component } from 'react'
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {product, deleteproduct, featured} from '../../../actions/homeActions';

class Product extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.product();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    onDelete = id => {
        this.props.deleteproduct(id);
    }

    onFeatured = data => {
        let id = data.id;
        let featured = data.featured === 1?0:1;
        let object = {
            id,
            featured
        }
        this.props.featured(object);
    }
    render() {
        const row = this.props.productContent.map(item=>{
            return(
                <tr key={item.id}>
                    <td className="center-text">
                        <NavLink to={'/admin/product/edit/'+item.id+'/'+item.parent}>
                            <span className="yellow-hover padding-all-5">-</span>
                        </NavLink>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                        <span onClick={()=>this.onFeatured({id:item.id, featured: item.featured})} className="padding-all-5 padding-s-all-5 padding-m-all-5 light-grey-bg font-s-12 font-m-12 cursor-pointer">
                            {item.featured===1?'- Featured':'+ Not Featured'}
                        </span>
                    </td>
                    <td>{item.sold}</td>
                    <td className="center-text">
                        <span onClick={()=>this.onDelete(item.id)} className="red-hover padding-all-5 cursor-pointer">x</span>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <AdminNav />

                <TitleCaption title="Products" />
                {/* break */}
                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    {this.props.response.msg}
                    {this.props.feature.msg}
                </div>

                <div className="width-100 height-5 flex-row-reverse align-items-center">
                    <div className="padding-right-10">
                        <NavLink to="/admin/product/add">
                            <button className="btn transparent border-all-1">Add Product</button>
                        </NavLink>
                    </div>
                </div>

                <div className="width-100 height-5"></div>

                <table className="table bordered">
                <thead className="allerBd">
                    <tr><th></th><th>Product</th><th>Price</th><th>Category</th><th>Featured</th><th>Sold</th><th></th></tr>
                </thead>
                <tbody className="allerRg">
                    {row}
                </tbody>
                </table>

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    productContent: state.home.product,
    response: state.home.product_response,
    feature: state.home.featured
});

export default connect(mapStateToProps,{product, deleteproduct, featured})(Product);