import React, { Component } from 'react';
import { connect } from 'react-redux';
import {happening, logo} from '../../actions/homeActions';
import {NavLink} from 'react-router-dom';

class Happening extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.happening();
            this.props.logo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {
        const {second_sec} = this.props.response;
        return (
            <div className={second_sec === 1 ? 'display-block' : 'display-none'}>
                
            <div className="width-100 height-90 height-s-50 height-m-50 overflow-hidden banner">
		        <img src={this.props.happeningContent.image} alt="" />
                <div className="full flex-column justify-content-center align-items-center">
                    <div className="capitalize font-sweet font-20 font-s-15 font-m-20 center-text">
                        -{this.props.happeningContent.first_cap}-
                    </div>

                    <div className="uppercase center-text font-60 font-s-20 font-m-30 font-allerBd bold-text deep-grey-text">
                        <div>{this.props.happeningContent.second_cap}</div> 
                        <div>{this.props.happeningContent.third_cap}</div>
                    </div>

                    <div className="margin-top-20 flex-row justify-content-center">
                        <div className="uppercase font-allerBd font-15 font-s-10 padding-right-10">
                            <NavLink to={"/product/"+this.props.happeningContent.first_link} className="white-text">
                                <span className="deep-grey-bg padding-all-10">men's new arrival</span>
                            </NavLink>
                        </div>
                        <div className="uppercase font-allerBd font-15 font-s-10">
                            <NavLink to={"/product/"+this.props.happeningContent.second_link} className="white-text">
                                <span className="deep-grey-bg padding-all-10">
                                    women's new arrival 
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
	        </div>
            {/* Break */}
	        <div className="width-100 height-10"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    happeningContent: state.home.happening,
    response: state.home.logo
});

export default connect(mapStateToProps,{happening, logo})(Happening);