import React, { Component } from 'react';
import {connect} from 'react-redux';
import {banner, logo} from '../../actions/homeActions';
import DisplayBanner from './DisplayBanner';

class Banner extends Component {
	
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.banner();
            this.props.logo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    render() {
        const displayContent = <DisplayBanner item={this.props.bannerContent} />;
        const {first_sec} = this.props.response;
        return (
            <div className={first_sec === 1 ? 'display-block' : 'display-none'}>
                {displayContent}

                {/* Break */}
                <div className="width-100 height-5 height-s-1"></div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    bannerContent : state.home.banner,
    response: state.home.logo
});

export default connect(mapStateToProps, { banner, logo })(Banner);