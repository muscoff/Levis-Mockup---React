import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import {connect} from 'react-redux';
import {category, editcategory} from '../../../actions/homeActions';
import TitleCaption from '../TitleCaption';

class EditCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            parent: null,
            category: null,
        }
    }

    componentDidMount(){
        let id = this.state.id;
        this.props.category();

        fetch('http://localhost/digishop/react/home/singlecategory.php?id='+id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                parent: data.parent,
                category: data.category
            });
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = e =>{
        e.preventDefault();
        let id = this.state.id;
        let category = this.state.category;
        let parent = this.state.parent;
        let data = {
            category,
            parent,
            id
        }
        this.props.editcategory(data);
    }
    
    render() {
        const {category, parent} = this.state;
        const sel = this.props.content.map(item=>{
            return (
                <option key={item.id} value={item.id}>{item.name}</option>
            )
        });
        return (
            <div>
                <AdminNav />
                <TitleCaption title="Edit Category" />

                <div className="width-100 height-10 flex-column justify-content-center align-items-center blue-text font-allerRg">
                    {this.props.res.msg}
                </div>

                <div className="width-30 width-s-100 width-m-90 padding-all-10 margin-auto">
                    <form onSubmit={this.onSubmit}>
                        <div className="font-allerBd">Parent</div>
                        <select value={parent?parent:''} name="parent" onChange={this.onChange} id="sel">
                            <option value="0">Parent</option>
                            {sel}
                        </select> <br />

                        <div className="margin-top-10">
                            <div className="capitalize font-allerBd">Category</div>
                            <input type="text" name="category" value={category} onChange={this.onChange} />
                        </div>

                        <div className="margin-top-20">
                            <input type="submit" name="" className="white-text deep-grey-bg font-allerBd" value="Update Category" />
                        </div>
                    </form>
                </div>

                <BottomDigishop />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.home.category,
    res: state.home.res
});

export default connect(mapStateToProps,{category, editcategory})(EditCategory);