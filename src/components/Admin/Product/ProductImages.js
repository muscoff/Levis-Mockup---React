import React, { Component } from 'react'
import AdminNav from '../AdminNav';
import TitleCaption from '../TitleCaption';
import BottomDigishop from '../BottomDigishop';
import {connect} from 'react-redux';
import {productImage, delete_single_img, update_face} from '../../../actions/homeActions';
import UploadFiles from '../../UploadFiles';

class ProductImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            image: [],
            file: ''
        }
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{
            let id = this.state.id;
            this.single(id);
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    onFile = e => {
        this.setState({
            file: e.target.files
        });
    }

    single = id => {
        fetch('http://localhost/digishop/react/api/product.php?single='+id)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                title: response.title,
                image: response.image
            });
        });
    }

    productface = img => {
        let id = this.state.id;
        let image = img;
        let data = {id, image};
        this.props.update_face(data);
    }

    delete = img => {
        let id = this.state.id;
        let image = img;
        let data = {id, image};
        this.props.delete_single_img(data);
    }

    onSubmit = e => {
        e.preventDefault();
        let id = this.state.id;
        let image = this.state.file;
        let data = {id,image};
        if(data.image !== ''){
            this.props.productImage(data);
        }
    }
    render() {
        const {title, image} = this.state;
        const response = this.props.response.msg;
        const row = image.map((item, index)=>{
            return (
                <div key={index} className="col-3 col-s-6 padding-all-10">
                    <div className="relative flex-column justify-content-center align-items-center">
                        <div className="img-container-100">
                            <img src={item} alt="" />
                        </div>
                        <div className="font-allerRg center-text padding-all-10">
                            <span onClick={()=>this.delete(item)} className="cursor-pointer">click to delete</span>
                        </div>
                        <div className="absolute font-allerRg blue-text">
                            <span onClick={()=>this.productface(item)} className="white-bg padding-all-10 padding-s-all-2 cursor-pointer red-hover">
                                {index===0?'Product':'Use as Product'} face
                            </span>
                        </div>
                    </div>
                </div>
            )
        });
        const maximum = 4-image.length;
        return (
            <div>
                <AdminNav />
                <TitleCaption title="Update images" />

                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <span className="capitalize blue-text font-allerRg">{response}</span>
                </div>

                <div>
                    <div className="center-text capitalize font-allerBd grey-text">{title} images</div>

                    <div className="row">
                        {row}
                    </div>
                </div>
                <hr />

                <div className={maximum===0?"display-none":"margin-top-30 font-allerRg"}>
                    <div className="center-text capitalize green-text"><span className="border-bottom-1">Upload More Images</span></div>
                    
                    <div className={response?"width-100 height-5 flex-column justify-content-center align-items-center":''}>
                        <span className="font-allerRg bold blue-text capitalize">{response}</span>
                    </div>

                    <div className="width-40 width-s-100 margin-auto padding-all-10 display-block">
                        <form onSubmit={this.onSubmit}>
                            <div className="padding-all-20">
                                <UploadFiles label="Image(s)" onChange={this.onFile} className="input" />
                            </div>
                            <div className="relative"><button className="transparent border-all-1 absolute right-10">Update Images</button></div>
                        </form>
                    </div>
                </div>

                <div className="width-100 height-10"></div>

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    response: state.home.product_image,
});

export default connect(mapStateToProps,{productImage, delete_single_img, update_face})(ProductImages);