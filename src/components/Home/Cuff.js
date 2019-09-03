import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {cuff, logo} from '../../actions/homeActions';

class Cuff extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.cuff();
            this.props.logo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {
        const {seventh_sec} = this.props.response;
        return (
            <div className={seventh_sec === 1 ? 'display-block' : 'display-none'}>
                <div className="width-100 height-90 height-s-50 height-m-50 banner yellow-bg">
                    <img src={this.props.cuffContent.image} alt="" />
                    <div className="full flex-column justify-content-center align-items-center">
                        <div className="capitalize font-20 font-s-12 font-m-12 italic">
                            {this.props.cuffContent.first_cap}
                        </div>
                        <div className="uppercase center-text font-allerBd font-40 font-s-20 font-m-30 bold-text deep-grey-text word-spacing-0-2 margin-top-10">
                            <div>{this.props.cuffContent.second_cap}</div>
                            <div>{this.props.cuffContent.third_cap}</div>
                        </div>
                        <div className="uppercase font-allerBd font-20 font-s-15 margin-top-10">
                            <NavLink to={"/product/"+this.props.cuffContent.link} className="white-text">
                                <span className="padding-all-13 padding-s-all-5 padding-m-all-5 deep-grey-bg">
                                    {this.props.cuffContent.title} collection
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* break */}
                <div className="width-100 height-5"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cuffContent: state.home.cuff,
    response: state.home.logo
});

export default connect(mapStateToProps,{cuff, logo})(Cuff);