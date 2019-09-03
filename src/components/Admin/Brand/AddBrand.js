import React, { Component } from 'react';
import TitleCaption from '../TitleCaption';
import {connect} from 'react-redux';
import {addbrand} from '../../../actions/homeActions';

class AddBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: '',
        }
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let brand = this.state.brand;
        let data = {
            brand
        };
        this.props.addbrand(data);
    }
    render() {
        const {brand} = this.state;
        return (
            <div>
                <TitleCaption title="Add a new brand" />
                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <span className="font-allerRg capitalize">{this.props.response.msg}</span>
                </div>

                <div className="width-30 width-s-100 width-m-90 padding-all-10 margin-auto">
                    <form onSubmit={this.onSubmit}>
                        <div><input type="text" name="brand" onChange={this.onChange} value={brand} placeholder="Brand Name" /></div><br />
                        <div><input type="submit" value="Add Brand" className="deep-grey-bg white-text" name="" /></div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    response: state.home.response
});

export default connect(mapStateToProps,{addbrand})(AddBrand);