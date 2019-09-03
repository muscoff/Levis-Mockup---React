import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logo } from '../actions/homeActions';

class Logo extends Component {
    componentDidMount(){
        this.props.logo();
    }

    render() {
        return (
            <div className="width-10 width-s-20 width-m-20">
			<div className="img-container-100 display-block">
				<img src={this.props.logoContent.logo} alt="" id="openSideNav" />
			</div>
		</div>
        )
    }
}

const mapStateToProps = state => ({
    logoContent: state.home.logo
});

export default connect(mapStateToProps,{logo})(Logo);