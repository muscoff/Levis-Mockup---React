import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import TitleCaption from '../TitleCaption';
import InputField from '../../InputField';
import Button from '../../Button';
import SelectBrand from './SelectBrand';
import {connect} from 'react-redux';
import {brand, category, addproduct} from '../../../actions/homeActions';
import SelectCategory from './SelectCategory';
import Javascript from '../../../Javascript';
import UploadFiles from '../../UploadFiles';
import {Redirect} from 'react-router-dom';
import BottomDigishop from '../BottomDigishop';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            brand: '',
            category: '',
            child: '',
            price: '',
            children: [],
            files: '',
            description: '',
            back: false,
            msg: ''
        }
        this.js = new Javascript();
    }
    componentDidMount(){
        this.props.brand();
        this.props.category();
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getChildren = id => {
        fetch('http://localhost/digishop/react/api/catChild.php?id='+id)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                children: response
            });
        })
        .catch(error=>console.log(error));
    }

    onGetChild = () => {  
        setTimeout(()=>{
            let id = this.state.category;
            if(!isNaN(id)){
                this.getChildren(id);
            }
        }, 1000);
    }

    onFile = e => {
        this.setState({
            files: e.target.files
        });
    }

    onBack = e => {
        e.preventDefault();
        this.setState({back: true});
    }

    onSubmit = e => {
        e.preventDefault();
        let title = this.state.title;
        let brand = this.state.brand;
        let parent = this.state.category;
        let child = this.state.child;
        let price = this.state.price;
        let sizes = document.querySelector('#sizeQty').value;
        let image = this.state.files;
        let description = this.state.description;

        let data = {
            title,
            brand,
            parent,
            child,
            price,
            sizes,
            image,
            description
        }
        if(title !== '' & brand !== '' & parent !== '' & child !== '' & price !== '' & sizes !== '' & image !== '' & description !== ''){
        this.props.addproduct(data);
        }else{
            this.setState({msg: 'All the fields are required and cannot be empty'});
        }
    }
    render() {
        const { title, children, price, back, msg } = this.state;
        const content  = this.props.brandContent;
        const catContent = this.props.catContent;
        let items = [1,2,3,4,5,6,7,8,9,10,11,12];
        const response = this.props.response.msg;
        const rowItem = items.map(item=>{
            return (
                <React.Fragment key={item}>
                    <div className="col-2 col-s-4  col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Size</div>
                        <input type="text" className="size font-allerRg" />
                    </div>
                    <div className="col-2 col-s-4 col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Length</div>
                        <input type="text" className="length font-allerRg" />
                    </div>
                    <div className="col-2 col-s-4 col-m-4 padding-all-10">
                        <div className="font-allerRg deep-grey-text">Quantity</div>
                        <input type="number" className="input quantity font-allerRg" min="0" max="1000" />
                    </div>
                </React.Fragment>
            )
        });
        if(back){
            return <Redirect to="/admin/product" />;
        }
        return (
            <div>
                <AdminNav />
                <TitleCaption title="Add New Product" />

                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <div className="font-allerRg blue-text capitalize">{response?response:msg}</div>
                </div>

                <div className="width-90 width-s-100 margin-auto">
                    <form>
                    <div className="row">
                        <div className="col-3 col-s-12 col-m-12 padding-all-10">
                            <InputField type="text" label="title" name="title" value={title} onChange={this.onChange} className="transparent border-all-1 font-allerRg" />
                        </div>
                        <div className="col-3 col-s-12 col-m-12 padding-all-10">
                            <SelectBrand name="brand" label="brand" content={content} onChange={this.onChange} className="transparent border-all-1 font-allerRg" />
                        </div>
                        <div className="col-3 col-s-12 col-m-12 padding-all-10">
                            <SelectCategory name="category" label="parent category" content={catContent} onChange={(e)=>{this.onChange(e); this.onGetChild()}} className="transparent border-all-1 font-allerRg" />
                        </div>
                        <div className="col-3 col-s-12 col-m-12 padding-all-10">
                            <SelectCategory name="child" label="child category" content={children} onChange={this.onChange} className="transparent border-all-1 font-allerRg" />
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
                            <UploadFiles label="Image" name="files[]" onChange={this.onFile} max="4" />
                        </div>
                        <div className="col-6 col-s-12 col-m-12 padding-all-10">
                            <div className="font-allerRg capitalize">Description</div>
                            <textarea name="description" onChange={this.onChange} className="transparent allerRg"></textarea>
                        </div>
                        <div className="col-12 col-s-12 col-m-12">
                            <div className="flex-row-reverse">
                                <div className="padding-left-10"><Button value="Add product" onClick={this.onSubmit} className="font-allerBd deep-grey-bg white-text" /></div>
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
    brandContent: state.home.brand,
    catContent: state.home.category,
    response: state.home.product_response
});

export default connect(mapStateToProps,{brand, category, addproduct})(AddProduct);