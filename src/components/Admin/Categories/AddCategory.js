import React, { Component } from 'react';
import {connect} from 'react-redux';
import {category,addcategory} from '../../../actions/homeActions';

class AddCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            parent: 0,
            category: ''
        }
    }

    componentDidMount(){
        this.props.category();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = e =>{
        e.preventDefault();
        let category = this.state.category;
        let parent = this.state.parent;
        let data = {
            category,
            parent
        }
        this.props.addcategory(data);
    }
    render() {
        const {category} = this.state;
        const sel = this.props.content.map(item=>{
            return (
                <option key={item.id} value={item.id}>{item.name}</option>
            )
        });
        return (
            <div className="col-6 col-s-12 col-m-12 padding-all-10">
                <div className="capitalize font-allerBd">
                    <span className="border-bottom-1 padding-top-bottom-10">
                        add to category
                    </span>
                </div>

                <div className="margin-top-20">
                    <form onSubmit={this.onSubmit}>
                        <div className="font-allerBd">Parent</div>
                        <select name="parent" onChange={this.onChange}>
                            <option value="0">Parent</option>
                            {sel}
                        </select> <br />

                        <div className="margin-top-10">
                            <div className="capitalize font-allerBd">Category</div>
                            <input type="text" name="category" value={category} onChange={this.onChange} />
                        </div>

                        <div className="margin-top-20">
                            <input type="submit" name="" className="white-text deep-grey-bg font-allerBd" value="Add Category" />
                        </div>
                    </form>
                </div>
                <div className="margin-top-5 center-text font-allerRg blue-text">{this.props.response.msg}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.home.category,
    response: state.home.response
});

export default connect(mapStateToProps,{category, addcategory})(AddCategory);