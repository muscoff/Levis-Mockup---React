import React, { Component } from 'react'
import TopNav from '../TopNav';
import Nav from '../Nav';
import {connect} from 'react-redux';
import {size,length, by_size, by_length, by_price, product, product_search_cat, product_search_name} from '../../actions/homeActions';
import banner from '../../images/m.png';
import Javascript from '../../Javascript';
import {NavLink} from 'react-router-dom';

class FrontProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id?this.props.match.params.id:''
        }
        this.js = new Javascript();
    }
    componentDidMount(){
        this.props.product();
        this.props.size();
        this.props.length();
        this.js.banner();
        this.getParams();
    }

    getParams = () => {
        if(this.props.match.params.id !== undefined){
            this.props.product_search_cat(this.props.match.params.id);
        }

        if(this.props.match.params.name !== undefined){
            this.props.product_search_name(this.props.match.params.name);
        }
    }

    getSize = e => {
        let size = e.target.innerHTML;
        let data = {size};
        this.props.by_size(data);
    }

    getLength = e => {
        let length = e.target.innerHTML;
        let data = {length};
        this.props.by_length(data);
    }

    getPrice = e => {
        if(e.target.checked){
            let price = e.target.value;
            let data = {price};
            this.props.by_price(data);
        }else{
            this.props.product();
        }
    }

    onKeyDown = (e, value) => {
        if(e.keyCode === 13){
            this.props.product_search_name(value);
        }
    }
    render() {
        const product = this.props.productContent.length === 0?<div className="col-12 center-text font-allerRg capitalize">Product is currently unavailable! You can order unavailable products from us if you please! <span className="blue-text">Happy shopping!!!</span></div>
        :this.props.productContent.map(productItem=>{
            return (
                <div key={productItem.id} className="col-4 col-s-6 col-m-6 overflow-hidden">
                    <div className="border-all-hover item overflow-hidden">
                        <div className="relative flex-column justify-content-center align-items-center padding-all-10 padding-s-all-2">
                            <NavLink to={`/view/${productItem.id}`}>
                                <div className="img-container-100">
                                    <img src={productItem.image[0]} alt="" />
                                </div>
                            </NavLink>
                            <div className="font-allerRg capitalize font-s-12">{productItem.title}</div>
                            <div className="font-allerRg font-s-12">${productItem.price}</div>
                            <div className="absolute cursor-pointer white-bg quick-view uppercase">
                                <NavLink to={`/view/${productItem.id}`}>Quick View</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        const prices = ['0-50', '50-75', '75-100', '100'];
        const size = this.props.sizeValues.map(sizeItem=>{
            return (
                <div key={sizeItem} className="col-2 col-l-1 cursor-pointer">
                    <div onClick={this.getSize} className="border-all-1 center-text padding-all-10 deep-grey-white-text-hover">{sizeItem}</div>
                </div>
            ) 
        });

        const length = this.props.lengthValues.map(lengthItem=>{
            return (
                <div key={lengthItem} className="col-2 col-l-1 cursor-pointer">
                    <div onClick={this.getLength} className="border-all-1 center-text padding-all-10 deep-grey-white-text-hover">{lengthItem}</div>
                </div>
            ) 
        });

        const price = prices.map(priceItem=>{
            return (
                <div key={priceItem} className="col-12 col-s-6 col-l-3 flex-row">
                    <input type="checkbox" onChange={this.getPrice} defaultValue={priceItem} />
					<div className="capitalize font-allerRg padding-left-10">${priceItem}</div>
                </div>
            )
        });
        return (
            <div>
                <TopNav />
                <Nav onKeyDown={this.onKeyDown} display="display-block" />

                <div className="padding-all-10">
                    <div className="row">
                        {/* Left */}
                        <div className="col-3 col-s-12 col-m-12 padding-all-10 padding-s-all-2">
                            <div className="uppercase font-20 font-allerBd deep-grey-text border-bottom-1">filter</div>
                            <div className="uppercase font-17 font-allerRg grey-text margin-top-10">size</div>

                            <div className="uppercase font-17 font-allerRg grey-text margin-top-20">waist</div>
                            <div className="flex-row flex-wrap margin-top-10" id="waist">
                                {size}
                            </div>
                            <div className="uppercase font-17 font-allerRg grey-text margin-top-20">length</div>
                            <div className="flex-row flex-wrap margin-top-10" id="length">
                                {length}
                            </div>

                            <div className="uppercase font-17 font-allerRg grey-text margin-top-20">price</div>
                            <div className="margin-top-10 row" id="price">
                                {price}
                            </div>
                        </div>

                        {/* Right */}
                        <div id="content" className="col-9 col-s-12 col-m-12 padding-all-10 padding-s-all-2">
                            {/* mini banner */}
                            <div className="width-auto height-45 height-s-10 height-m-20 banner overflow-hidden">
                                <img src={banner} alt="" />
                                <div className="width-auto height-auto flex-column justify-content-center align-items-center">
                                    <div className="uppercase white-text font-40 font-s-20 font-m-30 font-allerBd">the taper jeans</div>
                                    <div className="white-text font-allerRg font-s-12">Because the right fit is everything</div>
                                </div>
                            </div>
                            {/* break */}
                            <div className="width-100 height-10"></div>

                            <div className="row" id="row">
                                {product}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sizeValues: state.home.size,
    lengthValues: state.home.length,
    productContent: state.home.product
});

export default connect(mapStateToProps,{size, length, product, by_size, by_length, by_price, product_search_cat, product_search_name})(FrontProduct);