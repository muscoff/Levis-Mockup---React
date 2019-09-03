import React, { Component } from 'react';
import TopNav from '../TopNav';
import Nav from '../Nav';
import InputField from '../InputField';
import Button from '../Button';
import {NavLink} from 'react-router-dom';

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            price: '',
            size: '',
            length: '',
            description: '',
            sizeArray: [],
            quantity: '',
            imageArray: [],
            msg: '',
        }
    }

    componentDidMount(){
        let id = this.state.id;
        this.getSingle(id);
    }

    getSingle = id => {
        fetch('http://localhost/digishop/react/api/product.php?single='+id)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                title: response.title,
                price: response.price,
                description: response.description,
                sizeArray: response.sizes,
                imageArray: response.image
            });
        });
    }

    addBg = (id, i) => {
        let mySizes = document.querySelectorAll(`#${id} div div`);
        let mySizesLength = mySizes.length;

        for(let y = 0; y<mySizesLength; y++){
            if(y !== i){
                let itemList = mySizes[y].classList;
                let itemNumber = itemList.length;
                for(let x = 0; x<itemNumber; x++){
                    if(itemList[x] === "color-bg-grey"){
                        mySizes[y].classList.remove('color-bg-grey');
                    }
                }
                itemList = mySizes[y].classList;
            }else{
                mySizes[y].classList.add('color-bg-grey');
            }
        }
    }

    getSize = (e, i) => {
        this.setState({
            size: e.target.innerHTML
        });
        let size = 'size';
        this.addBg(size, i);
    }

    getLength = (e, i) => {
        this.setState({
            length: e.target.innerHTML
        });
        let length = 'length';
        this.addBg(length, i);
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    check = (array, id, size, quantity) => {
        let count = array.length;
        for(let i=0; i<count; i++){
            if(array[i].id === id & array[i].size === size){
                array[i].quantity = quantity;
                array[i].total = array[i].price * array[i].quantity;
                return true;
            }else{
                continue;
            }
        }
    }

    onClick = () => {
        let id = this.state.id;
        let title = this.state.title;
        let size = this.state.size;
        let length = this.state.length;
        let quantity = this.state.quantity;
        let image = this.state.imageArray[0];
        let price = this.state.price;
        let total = price * quantity;
        let data = {id, title, size, length, quantity, image, price, total};

        let sizeArray = this.state.sizeArray;
        let sizePosition = null; 
        let lengthPosition = null;
        for(let i=0; i<sizeArray.length; i++){
            if(sizeArray[i].size.toUpperCase() === size.toUpperCase()){
                sizePosition = i;
            }

            if(sizeArray[i].len === length){
                lengthPosition = i;
            }
        }
        if(size !== '' & length !== '' & quantity !== ''){
        if(sizePosition === lengthPosition){
            var local = localStorage.getItem('cart');
            local = JSON.parse(local) === null?[]:JSON.parse(local);

            if(local.length === 0){
                local.push(data);
                localStorage.setItem('cart', JSON.stringify(local));
                this.setState({
                    msg: 'Item Added'
                });
            }else{
                if(this.check(local, id, size, quantity)){
                    localStorage.setItem('cart', JSON.stringify(local));
                    this.setState({
                        msg: 'Cart Updated'
                    });
                }else{
                    local.push(data);
                    localStorage.setItem('cart', JSON.stringify(local));
                    this.setState({
                        msg: 'Item Added'
                    });
                }
            }
        }else{
            this.setState({
                msg: `The selected length ${length} is not available for the selected size "${size.toUpperCase()}". Please try a different size or length. Happy shopping!`
            });
        }
        }else{
            this.setState({
                msg: 'Please make sure to select the size and length and also input quantity'
            });
        }
    }

    render() {
        const {title, price, description, quantity, msg} = this.state;
        const subImages = this.state.imageArray.map((image, index)=>{
            if(index !== 0){
                return (
                    <div key={image} className="col-3 col-s-4 col-m-4 padding-all-10">
						<div className="width-auto height-20 img-container-100">
							<img src={image} alt="" />
						</div>
					</div>
                )
            }
        });
        let sizes = this.state.sizeArray.map((sizeItem, index)=>{
            return (
                <div key={sizeItem.size} className="col-2 cursor-pointer">
                    <div onClick={(e)=>{this.getSize(e, index)}} className="border-all-1 center-text padding-all-10 deep-grey-white-text-hover">{sizeItem.size.toUpperCase()}</div>
                </div>
            )
        });

        let length = this.state.sizeArray.map((lengthItem, index)=>{
            return (
                <div key={lengthItem.len} className="col-2 cursor-pointer">
                    <div onClick={(e)=>{this.getLength(e,index)}} className="border-all-1 center-text padding-all-10 deep-grey-white-text-hover">{lengthItem.len}</div>
                </div>
            )
        });
        return (
            <div>
                <TopNav />
                <Nav display="display-none" />

                <div className="padding-all-10 center-text">
                    <span className="font-allerRg blue-text">{msg}</span>
                </div>

                <div className="container">
                    <div className="flex-row flex-wrap">
                        <div className="col-6 col-s-12 col-m-12">
                            <div className="width-auto width-s-100 padding-all-10">
                                {/* main image */}
                                <div id="main-switch" className="max-width-100 max-height-90 overflow-hidden">
                                    <div id="magnigy" className="img-container-100 relative">
                                        <img src={this.state.imageArray[0]} alt="" />
                                    </div>
                                </div>
                                {/* sub images */}
                                <div id="switch" className="flex-row margin-top-10">
                                    {subImages}
                                </div>

                            </div>
                        </div>

                        <div className="col-6 col-s-12 col-m-12">
                            <div className="padding-all-10">
                                <div className="capitalize font-allerBd font-20">{title}</div>

                                <div className="margin-top-10 font-allerBd font-20">{price}</div>
                                <div className="font-12 font-allerRg grey-text">Pay with mobile money, bitcoin or credit card</div>

                                <div className="margin-top-10 uppercase font-allerBd">description</div>
                                <div className="font-13 grey-text">{description}</div>

                                <div className="margin-top-20 uppercase font-allerRg font-14">
                                    <span className="border-all-1 padding-all-10 red-text">what's your size?</span>
                                </div>

                                {/* sizes */}
                                <div className="margin-top-20">
                                    <div className="grey-text uppercase padding-all-10 font-allerBd">size</div>
                                    <div className="row" id="size">
                                        {sizes}
                                    </div>
                                </div>

                                {/* length */}
                                <div className="margin-top-20">
                                    <div className="grey-text uppercase padding-all-10 font-allerBd">length</div>
                                    <div className="row" id="length">
                                        {length}
                                    </div>
                                </div>

                                <div className="margin-top-20">
                                    <div className="row">
                                        <div className="col-4 col-s-12 col-m-12 col-l-12">
                                            <InputField name="quantity" label="quantity" value={quantity} onChange={this.onChange} />
                                            <div className="margin-top-20">
                                                <Button value="Add To Cart" className="red-bg width-100 font-allerBd white-text" onClick={this.onClick} />
                                            </div>
                                        </div>
                                        <div className="col-8"></div>
                                        <div className="col-6 col-s-12 col-m-12 col-l-12 margin-top-10">
                                            <NavLink to="/product/">
                                                <div className="padding-top-bottom-10 blue-text">Go back to shopping site</div>
                                            </NavLink>
                                        </div>
                                        <div className="col-6"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default View;