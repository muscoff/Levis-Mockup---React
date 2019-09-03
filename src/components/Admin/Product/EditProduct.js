import React, { Component } from 'react'
import AdminNav from '../AdminNav';
import TitleCaption from '../TitleCaption';
import InputField from '../../InputField';
import {connect} from 'react-redux';
import {brand, category, editproduct} from '../../../actions/homeActions';
import Javascript from '../../../Javascript';
import Button from '../../Button';
import {Redirect} from 'react-router-dom';
import BottomDigishop from '../BottomDigishop';

class EditProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            brand: null,
            child: null,
            children: [],
            parent: this.props.match.params.parent,
            description: '',
            price: '',
            sizeArray: [],
            back: false,
            image:false,
        }
        this.props.brand();
        this.props.category();
        this.single(this.state.id);
        this.getChildren(this.state.parent);
        this.js = new Javascript();
        
    }

    componentDidMount(){
        this.setString();
    }

    single =id =>{
        fetch('http://localhost/digishop/react/api/product.php?single='+id)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                title: response.title,
                brand: response.brand,
                child: response.child_cat,
                parent: response.parent_cat,
                description: response.description,
                sizeArray: response.sizes,
                price: response.price,
                children: []
            });
        });
    }

    getChildren = id => {
        fetch('http://localhost/digishop/react/api/catChild.php?id='+id)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                children: response
            });
        });
    }

    fetchChildren = () => {
        setTimeout(()=>{
            let id = this.state.parent;
            this.getChildren(id);
        },1000);
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        let id = this.state.id;
        let title = this.state.title;
        let brand = this.state.brand;
        let price = this.state.price;
        let parent = this.state.parent;
        let child = this.state.child;
        let description = this.state.description;
        let sizes = document.querySelector('#sizeQty').value;
        let data = {
            id,
            title,
            brand,
            price,
            parent,
            child,
            description,
            sizes
        }
        this.props.editproduct(data);
    }

    onBack = e => {
        e.preventDefault();
        this.setState({
            back: true
        });
    }

    onImage = e => {
        e.preventDefault();
        this.setState({
            image: true
        });
    }

    setString = () => {
        setTimeout(()=>{
            let string =  this.state.sizeArray;
            let s = '';
            for(let i=0; i<string.length; i++){
                s = s+string[i].size+':'+string[i].len+'-'+string[i].quantity+',';
            }
            let holder = document.querySelector('#sizeQty');
            holder.setAttribute('value', s);
        },1000);
    }

    render() {
        const response = this.props.response.msg;
        let {title, brand, parent, child, description, price, children, back, sizeArray, image, id} = this.state;
        children = children?children:[];
        const brandItems = this.props.brandContent.map(item=>{
            return (
                <option key={item.id} value={item.id} >{item.brand}</option>
            )
        });
        const catItems = this.props.catContent.map(catItem=>{
            return (
                <option key={catItem.id} value={catItem.id}>{catItem.name}</option>
            )
        });
        const childItems = children.map(kid=>{
            return (
                <option key={kid.id} value={kid.id}>{kid.name}</option>
            )
        });
        let items = [1,2,3,4,5,6,7,8,9,10,11,12];
        let len = sizeArray.length;
        const rowItem = items.map((item, index)=>{
            return (
                <React.Fragment key={item}>
                    <div className="col-2 col-s-4  col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Size</div>
                        <input type="text" defaultValue={index<len?sizeArray[index].size:''} className="size font-allerRg" />
                    </div>
                    <div className="col-2 col-s-4 col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Length</div>
                        <input type="text" defaultValue={index<len?sizeArray[index].len:''} className="length font-allerRg" />
                    </div>
                    <div className="col-2 col-s-4 col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Quantity</div>
                        <input type="number" defaultValue={index<len?sizeArray[index].quantity:''} className="input quantity font-allerRg" min="0" max="1000" />
                    </div>
                </React.Fragment>
            )
        });
        if(back){
            return <Redirect to="/admin/product" />;
        }
        if(image){
            return <Redirect to={"/admin/product/images/"+id} />;
        }
        return (
            <div>
                <AdminNav />
                <TitleCaption title="Edit Product" />
                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <div className="font-allerRg blue-text">{response}</div>
                </div>

                <div className="width-90 width-s-100 margin-auto">
                    <form>
                        <div className="row">
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <InputField type="text" label="title" name="title" value={title} onChange={this.onChange} className="transparent border-all-1 font-allerRg" />
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">Brand</div>
                                <select value={brand?brand:''} onChange={this.onChange} className="transparent border-all-1 font-allerRg" name="brand">
                                    {brandItems}
                                </select>
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">parent category</div>
                                <select value={parent?parent:''} onChange={(e)=>{this.onChange(e); this.fetchChildren()}} className="transparent border-all-1 font-allerRg" name="parent">
                                    <option value=""></option>
                                    {catItems}
                                </select>
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">child category</div>
                                <select value={child?child:''} onChange={this.onChange} className="transparent border-all-1 font-allerRg" name="child">
                                    <option value=""></option>
                                    {childItems}
                                </select>
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <InputField type="text" label="price" name="price" value={price} onChange={this.onChange} className="transparent border-all-1 font-allerRg" />
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">Sizes {'&'} quantity</div>
                                <div><button onClick={this.js.openModal} className="transparent border-all-1 font-allerBd">Size {'&'} Quantity</button></div>
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">Sizes {'&'} Quantity Preview</div>
                                <input id="sizeQty" type="text" name="size" readOnly className="transparent border-all-1 font-allerRg" />
                            </div>
                            <div className="col-3 col-s-12 col-m-12 padding-all-10"></div>
                            <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                <div className="display-block">
                                    <button onClick={this.onImage} className="transparent border-all-1 font-allerBd" id="updateImage">Update images</button>
                                </div>
                            </div>
                            <div className="col-6 col-s-12 col-m-12 padding-all-10">
                                <div className="font-allerRg capitalize">Description</div>
                                <textarea value={description} name="description" onChange={this.onChange} className="transparent allerRg"></textarea>
                            </div>
                            <div className="col-12 col-s-12 col-m-12">
                            <div className="flex-row-reverse">
                                <div className="padding-left-10"><Button value="Update product" onClick={this.onSubmit} className="font-allerBd deep-grey-bg white-text" /></div>
                                <button id="back" onClick={this.onBack} className="transparent border-all-1 font-allerBd deep-grey-text">Back</button>
                            </div>
                        </div>	
                        </div>
                    </form>
                </div>

                <div className="width-100 height-100 black-bg opacity-05 fixed top-0" id="bg"></div>
                <div id="modal" className="width-60 width-s-100 width-m-100 white-bg absolute left-20 left-s-0 left-m-0 top-10 round-5 padding-all-10 font-allerRg">
                    <div className="width-100 height-10 flex-column justify-content-center align-items-center border-bottom-1">
                        Size and Quantities
                    </div>
                    <div className="row">
                        {rowItem}
                    </div>
                    <div className="width-100 width-s-100 height-10 margin-top-20">
                        <div className="flex-row-reverse">
                            <div className="padding-left-10"><button onClick={this.js.cancel} className="transparent border-all-1">Cancel</button></div> 
                            <div><button className="deep-grey-bg white-text" onClick={this.js.save}>Save</button></div>
                        </div>
                    </div>
                </div>
                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    brandContent : state.home.brand,
    catContent: state.home.category,
    response: state.home.product_response,
});

export default connect(mapStateToProps,{brand, category, editproduct})(EditProduct);