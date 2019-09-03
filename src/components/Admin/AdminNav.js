import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class AdminNav extends Component {
    render() {
        return (
            <div className="width-100 height-10 flex-row align-items-center black-bg">
            <div className="ul-inline padding-left-10">
                <ul className="allerRg">
                    <li><NavLink to="/admin/pages" className="white-text yellow-hover padding-right-10">Pages</NavLink></li>
                    <li><NavLink to="/admin/brand" className="white-text yellow-hover padding-right-10">Brand</NavLink></li>
                    <li><NavLink to="/admin/categories" className="white-text yellow-hover padding-right-10">Categories</NavLink></li>
                    <li><NavLink to="/admin/product" className="white-text yellow-hover padding-right-10">Products</NavLink></li>
                    <li><NavLink to="/admin/order" className="white-text yellow-hover padding-right-10">Order</NavLink></li>
                    <li><NavLink to="/admin/settings" className="white-text yellow-hover padding-right-10">Settings</NavLink></li>
                </ul>
            </div>
            <div className="absolute right-1 font-allerRg capitalize">
                {this.props.children}
            </div>
        </div>
        )
    }
}
