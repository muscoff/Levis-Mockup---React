import React, { Component } from 'react';

import TopNav from '../TopNav';
import Nav from '../Nav';
import Banner from './Banner';
import Happening from './Happening';
import Afterpay from './Afterpay';
import Threemodels from './Threemodels';
import Summer from './Summer';
import Shirt from './Shirt';
import Cuff from './Cuff';
import {connect} from 'react-redux';
import {logo} from '../../actions/homeActions';
import Javascript from '../../Javascript';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
        }
        this.js = new Javascript();
    }
    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.props.logo();
            this.js.banner();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    render() {
        if(this.props.content.length === 0){
            return <div className="width-100 height-100 flex-column justify-content-center align-items-center">
                <div className="font-allerRg">Front View is still under construction</div>
            </div>
        }

        return (
            <div>
                <TopNav></TopNav>
                <Nav display="display-none" />
                <Banner />
                <Happening />
                <Afterpay /> 
                <Threemodels />
                <Summer />
                <Shirt /> 
                <Cuff /> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.home.logo
});

export default connect(mapStateToProps,{logo})(Home);