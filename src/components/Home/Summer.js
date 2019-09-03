import React, { Component } from 'react';
import {connect} from 'react-redux';
import {summer, logo} from '../../actions/homeActions';
import {NavLink} from 'react-router-dom';

class Summer extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.summer();
            this.props.logo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {
        const {fifth_sec} = this.props.response; 
        return (
            <div className={fifth_sec === 1 ? 'display-block' : 'display-none'}>
                <div className="width-100 height-90 height-s-50 height-m-50 banner">
                    <img src={this.props.summerContent.image} alt=""/>
                    <div className="full flex-column justify-content-center align-items-center overflow-hidden">
                        <div className="white-text word-spacing-0-2 font-25 font-s-12 font-m-20 capitalize italic">
                            -{this.props.summerContent.first_cap}-
                        </div>
                        <div className="uppercase white-text font-50 font-s-20 font-m-30 font-allerBd center-text bold-text">
                            <div>{this.props.summerContent.second_cap}</div> 
                            <div>{this.props.summerContent.third_cap}</div>
                        </div>
                        <div className="flex-row justify-content-center margin-top-10">
                            <div className="uppercase padding-right-10">
                                <NavLink to={'/product/'+this.props.summerContent.first_link} className="deep-grey-text">
                                    <span className="white-bg font-allerBd padding-all-13 padding-s-all-10">{this.props.summerContent.firstTitle}'s shorts</span>
                                </NavLink>
                            </div>
                            <div className="uppercase padding-left-10">
                                <NavLink to={'/product/'+this.props.summerContent.second_link} className="deep-grey-text">
                                    <span className="white-bg font-allerBd padding-all-13 padding-s-all-10">{this.props.summerContent.secondTitle}'s shorts</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* break */}
                <div className="width-100 height-5"></div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    summerContent: state.home.summer,
    response: state.home.logo
});

export default connect(mapStateToProps,{summer, logo})(Summer);