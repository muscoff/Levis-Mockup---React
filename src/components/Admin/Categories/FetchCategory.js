import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {category, deletecategory} from '../../../actions/homeActions';

class FetchCategory extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.category();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    onDelete = id => {
        this.props.deletecategory(id);
    }
    render() {
        const tableRow = this.props.catContent.map(item=>{
            return (
                <React.Fragment key={item.id}>
                <tr key={item.name} className="blue-bg">
                    <td className="center-text">
                        <NavLink to={"/admin/category/edit/"+item.id}>
                            <span className="yellow-hover">-</span>
                        </NavLink>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.parentName}</td>
                    <td className="center-text">
                        <span className="yellow-hover cursor-pointer" onClick={()=>this.onDelete(item.id)}>x</span>
                    </td>
                </tr>
                {item.children.map(child=>{
                        return (
                            <tr key={child.name}>
                                <td className="center-text">
                                <NavLink to={"/admin/category/edit/"+child.id}>
                                    <span className="yellow-hover">-</span>
                                </NavLink>
                                </td>
                                <td>{child.name}</td>
                                <td>{child.parentName}</td>
                                <td className="center-text">
                                    <span className="yellow-hover cursor-pointer" onClick={()=>this.onDelete(child.id)}>x</span>
                                </td>
                            </tr>
                        )
                    })
                    }
                </React.Fragment>
            )
        });
        return (
            <div className="col-6 col-s-12 col-m-12 padding-all-10">
                <table className="table bordered allerRg">
                    <thead>
                        <tr className=""><th></th><th>Category</th><th>Parent</th><th></th></tr>
                    </thead>
                    <tbody>
                        {tableRow}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    catContent: state.home.category,
    response: state.home.response
});

export default connect(mapStateToProps,{category, deletecategory})(FetchCategory);