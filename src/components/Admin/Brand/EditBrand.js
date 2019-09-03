import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import {connect} from 'react-redux';
import {editbrand} from '../../../actions/homeActions';

class EditBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            brand: this.props.match.params.brand
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
        let id = this.state.id
        let data = {
            brand,
            id
        };
        this.props.editbrand(data);
    }
    render() {
        const {brand} = this.state;
        return (
            <div>
                <AdminNav />
                <TitleCaption title="Edit Brand"/>

                <div className="width-100 height-10 flex-column justify-content-center align-items-center">
                    <span className="font-allerRg capitalize">{this.props.response.msg}</span>
                </div>

                <div className="width-30 width-s-100 width-m-90 padding-all-10 margin-auto">
                    <form onSubmit={this.onSubmit}>
                        <div><input type="text" name="brand" onChange={this.onChange} value={brand} placeholder="Brand Name" /></div><br />
                        <div><input type="submit" value="Update Brand" className="deep-grey-bg white-text" name="" /></div>
                    </form>
                </div>

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    response: state.home.response
});

export default connect(mapStateToProps,{editbrand})(EditBrand);