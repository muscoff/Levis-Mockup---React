import React, { Component } from 'react';
import {connect} from 'react-redux';
import {threemodels, logo} from '../../actions/homeActions';
import Three from './Three';

class Threemodels extends Component {

    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.threemodels();
            this.props.logo();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    render() {
        const content = <Three items={this.props.modelsContent} />
        const {fourth_sec} = this.props.response;
        return (
            <div className={fourth_sec === 1 ? 'display-block' : 'display-none'}>
                <div className="row">
                    {content}
                </div>
                {/* break */}
                <div className="width-100 height-5"></div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    modelsContent: state.home.threemodels,
    response: state.home.logo
});

export default connect(mapStateToProps,{threemodels, logo})(Threemodels);