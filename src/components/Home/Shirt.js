import React, { Component } from 'react';
import {connect} from 'react-redux';
import {shirt, logo} from '../../actions/homeActions';
import {NavLink} from 'react-router-dom';

class Shirt extends Component {
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.shirt();
            this.props.logo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {
        const {sixth_sec} = this.props.response;
        return (
            <div className={sixth_sec === 1 ? 'display-block' : 'display-none'}>
                <div className="width-100 height-100 height-s-50 height-m-50 banner overflow-hidden">
                    <img src={this.props.shirtContent.image} alt="" />
                    <div className="row">
                        <div className="col-3 col-s-2 col-m-2"></div>

                        <div className="col-2 col-s-6 col-m-4 height-100 height-s-50 height-m-50">
                            <div className="full flex-column justify-content-center align-items-center">
                                <div className="center-text">
                                    <div className="uppercase font-60 font-s-20 font-m-30 font-allerBd center-text bold-text deep-grey-text">
                                        {this.props.shirtContent.first_cap}
                                    </div>
                                    <div className="center-text font-s-15">{this.props.shirtContent.second_cap}</div>
                                    <p className="margin-top-10 font-s-12">
                                        <NavLink to={"/product/"+this.props.shirtContent.first_link}>
                                            <span className="border-bottom-3-grey uppercase font-allerBd">{this.props.shirtContent.first_title}'s tees</span>
                                        </NavLink>
                                    </p>
                                    <p className="margin-top-10 font-s-12">
                                        <NavLink to={"/product/"+this.props.shirtContent.second_link}>
                                            <span className="border-bottom-3-grey uppercase font-allerBd">{this.props.shirtContent.second_title}'s tees</span>
                                        </NavLink>
                                    </p>
                                    <p className="margin-top-10 font-s-12">
                                        <NavLink to={"/product/"+this.props.shirtContent.third_link}>
                                            <span className="border-bottom-3-grey uppercase font-allerBd">{this.props.shirtContent.third_title}'s tees</span>
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-7 col-s-4 col-m-6"></div>
                    </div>
                </div>
                {/* break */}
                <div className="width-100 height-5"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shirtContent: state.home.shirt,
    response: state.home.logo
});

export default connect(mapStateToProps,{shirt, logo})(Shirt);