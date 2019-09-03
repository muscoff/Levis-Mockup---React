import React, { Component } from 'react';
import { connect } from 'react-redux';
import {afterpay, logo} from '../../actions/homeActions';
import {NavLink} from 'react-router-dom';

class Afterpay extends Component { 
    componentDidMount(){
		this.timeID = setInterval(()=>{
			this.props.afterpay();
			this.props.logo();
		},1000);
	}
	componentWillUnmount(){
		clearInterval(this.timeID);
	}
    render() {
        const {third_sec} = this.props.response;
        return (
            <div className = {third_sec === 1 ? 'display-block' : 'display-none'}>

<div className="width-100 height-40 height-s-30 deep-blue-bg flex-column justify-content-center align-items-center">
		<div className="overflow-hidden"> 
			<div className=""> 
				<div className="font-allerBd font-50 font-s-20 font-m-30 white-text center-text uppercase">{this.props.afterConent.first_cap}</div>
			</div>

			<div className="uppercase font-40 font-s-20 font-m-30 center-text font-allerBd white-text">{this.props.afterConent.second_cap}</div>

			<div className="ul-inline center-text margin-top-10">
				<ul>
					<li className="padding-right-10 uppercase font-allerBd">
						<NavLink to={"/product/"+this.props.afterConent.first_link} className="white-text"><span className="border-bottom-3-white">shop {this.props.afterConent.first_title}</span></NavLink>
					</li>
					<li className="padding-right-10 uppercase font-allerBd">
						<NavLink to={"/product/"+this.props.afterConent.second_link} className="white-text"><span className="border-bottom-3-white">shop {this.props.afterConent.second_title}</span></NavLink>
					</li>
				</ul>
			</div>

		</div>
	</div>   

            </div>
        )
    }
}

const mapStateToProps = state => ({
	afterConent: state.home.afterpay,
	response: state.home.logo
});

export default connect(mapStateToProps,{afterpay, logo})(Afterpay);