import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logo, update_control, upload_logo, update_logo} from '../../../actions/homeActions';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import UploadFile from './UploadFile';

class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: ''
        }
    }
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.logo();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    UpdateLogo = id =>{
        let data = {
            id,
            image: this.state.file[0],
        }
        this.props.update_logo(data);
    }
    onSubmit = () => {
        let data = {
            image: this.state.file[0],
        }
        this.props.upload_logo(data);
    }

    onFileHandle = e => {
        this.setState({
            file: e.target.files
        });
    }

    onClick = object => {
        let value = object.value ===1?0:1;
        let position = object.position;
        let id = object.id;
        let data = {
            position,
            id,
            value
        }
        switch(object.position){
            case 'first': 
                this.props.update_control(data);
            break;
            case 'second': 
                this.props.update_control(data);
            break;
            case 'third': 
                this.props.update_control(data);
            break;
            case 'fourth': 
                this.props.update_control(data);
            break;
            case 'fifth': 
                this.props.update_control(data);
            break;
            case 'sixth': 
                this.props.update_control(data);
            break;
            case 'seventh': 
                this.props.update_control(data);
            break;
            default:
                return;
        }
    }
    render() {
        const {id, first_sec, second_sec, third_sec, fourth_sec, fifth_sec, sixth_sec, seventh_sec} = this.props.content;
        
        // console.log(this.props.content);
        return (
            <div>
                <AdminNav />
                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    {this.props.response.msg}
                </div>
                <TitleCaption title={this.props.content.length!==0?'Change Logo':'Add Logo'} />

                <div className="width-40 width-s-100 width-m-90 margin-auto">
                        <div className={this.props.content.length===0?'display-none':'display-block'}>
                            <div><UploadFile name="image" onChange={this.onFileHandle} className="input" /></div><br />
                            <input type="submit" onClick={(e)=>this.UpdateLogo(id)} name="" className="deep-grey-bg white-text font-allerBd" value="Edit Logo" />
                        </div>
                        <div className={this.props.content.length===0?'display-block':'display-none'}>
                            <div><UploadFile name="image" onChange={this.onFileHandle} className="input" /></div><br />
                            <input type="submit" onClick={this.onSubmit} name="" className="deep-grey-bg white-text font-allerBd" value="Upload Logo" />
                        </div>
                    <div className={this.props.content.length===0?'display-none':'margin-top-10 display-block'}>
                        <table className="table bordered">
                            <thead>
                                <tr className="font-allerBd uppercase"><th>section name</th><th>visibility</th></tr>
                            </thead>
                            <tbody className="capitalize font-allerRg">
                                <tr>
                                <td>section 1</td>
                                    <td>
                                        <span className={first_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"} 
                                        onClick={()=>this.onClick({position: 'first',value:first_sec, id})}>
                                        {first_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 2</td>
                                    <td>
                                        <span className={second_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"} 
                                        onClick={()=>this.onClick({position: 'second',value:second_sec, id})}>
                                        {second_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 3</td>
                                    <td>
                                        <span className={third_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"}
                                        onClick={()=>this.onClick({position: 'third',value:third_sec, id})}>
                                        {third_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 4</td>
                                    <td>
                                        <span className={fourth_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"}
                                        onClick={()=>this.onClick({position: 'fourth',value:fourth_sec, id})}>
                                        {fourth_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 5</td>
                                    <td>
                                        <span className={fifth_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"} 
                                        onClick={()=>this.onClick({position: 'fifth',value:fifth_sec, id})}>
                                        {fifth_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 6</td>
                                    <td>
                                        <span className={sixth_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"} 
                                        onClick={()=>this.onClick({position: 'sixth',value:sixth_sec, id})}>
                                        {sixth_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                <td>section 7</td>
                                    <td>
                                        <span className={seventh_sec === 1 ? "blue-bg white-text padding-all-5 cursor-pointer" : "red-bg white-text padding-all-5 cursor-pointer"} 
                                        onClick={()=>this.onClick({position: 'seventh',value:seventh_sec, id})}>
                                        {seventh_sec===1?'On':'off'}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <BottomDigishop />
            </div>
        )
    }
}

const mapStateTopProps = state => ({
    content: state.home.logo,
    response: state.home.response
});

export default connect(mapStateTopProps,{logo, update_control, upload_logo, update_logo})(Settings);