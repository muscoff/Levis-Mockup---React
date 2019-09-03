import React from 'react';
import {NavLink} from 'react-router-dom';

export default function DisplayBanner(props) {
    return (
        <div className="width-100 height-40 height-s-30 banner white-text overflow-hidden">
        <img src={props.item.image} alt="" />
            <div className="full flex-column justify-content-center align-items-center">
                <div className="font-30 font-s-15 font-m-20 font-l-20 margin-top-10 font-sweet word-spacing-0-2 capitalize">
                    {props.item.firstCap}
                </div>

                <div className="font-60 font-s-20 font-m-20 font-l-20 uppercase bold-text font-allerBd">
                {props.item.secondCap}
                </div>

                <div className="ul-inline font-s-12">
                    <ul>
                        <li className="padding-right-10 uppercase font-allerBd">
                            <NavLink to={'/product/'+props.item.firstLink} className="white-text">
                                <span className="border-bottom-3-white">shop {props.item.first_title}</span>
                            </NavLink>
                        </li>
                        <li className="padding-right-10 uppercase font-allerBd">
                            <NavLink to={'/product/'+props.item.secondLink} className="white-text">
                                <span className="border-bottom-3-white">shop {props.item.second_title}</span>
                            </NavLink>
                        </li>
                        <li className="padding-right-10 uppercase font-allerBd">
                            <NavLink to={'/product/'+props.item.thirdLink} className="white-text">
                                <span className="border-bottom-3-white">shop {props.item.third_title}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="margin-top-10">Online only <span className="border-bottom-1-white">See details</span></div>

            </div>
        </div>
    )
}
