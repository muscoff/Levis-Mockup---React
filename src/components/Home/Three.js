import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Three(props) {
    
    let col = props.items.map(item=>{
        return (
            <div key={item.image} className="col-4 flex-column justify-content-center align-items-center">
                <div className="padding-all-20 padding-s-all-1 padding-m-all-5">
                    <div className="img-container-100">
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div className="padding-all-10 padding-s-all-1 padding-m-all-5"> 
						<div className="center-text uppercase font-s-10">
							<NavLink to={'/product/'+item.link}>
								<span className="border-bottom-3-grey bold-text">shop {item.title}</span>
							</NavLink>
						</div>
					</div>
            </div>
        )
    });
    return (
        <div className="row">
            {col}
        </div>
    )
}
