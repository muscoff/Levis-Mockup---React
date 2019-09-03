import React, { Component } from 'react';
import { connect } from 'react-redux';
import { category } from '../actions/homeActions';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.category();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    render() {
        const list = this.props.categories.map((item)=>{
            return (
                <li key={item.name} className="padding-right-10 uppercase">
                <NavLink to={"/product/"+item.id}>{item.name}
                <React.Fragment>
                    <ul>
                        {item.children.map(child=>{
                            return(
                                <li key={child.id}><NavLink to={`/product/${child.id}`} className="red-hover">{child.name}</NavLink></li>
                            )
                        })}
                    </ul>
                </React.Fragment>
                </NavLink>
                </li>
            );
        });
        return (
            <div className="width-60 hide-on-small-only height-auto flex-column justify-content-center">
                <div className="nav">
                    <div className="nav-wrapper">
                        <ul className="inline-block allerBd">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.home.category
});

export default connect(mapStateToProps,{ category })(Menu);