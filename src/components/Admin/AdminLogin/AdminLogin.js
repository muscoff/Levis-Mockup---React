import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BottomDigishop from '../BottomDigishop';

class AdminLogin extends Component {
    state = {
        referer : false
    }

    login = (e) =>{
        e.preventDefault();
        this.props.fake.authenticate(()=>{
            this.setState({referer: !this.state.referer});
        })
    }
    render() {
        const {referer} = this.state;

        if(referer){
            return <Redirect to="/admin/" />;
        }
        return (
            <div>
               <div className="width-100 height-80 flex-column justify-content-center align-items-center">
                    <div className="width-30 width-s-100 width-m-80 height-30 padding-all-10">
                        <form onSubmit={this.login}>
                            <div><input type="password" className="input" name="password" placeholder="Password" /></div> <br />
                            <div className="display-none">
                                <div className="red-text font-allerBd"></div><br />
                            </div>
                            <input type="submit" className="width-100 deep-grey-bg white-text font-allerBd" value="Login" />
                        </form>
                    </div>
                </div>

                <BottomDigishop />
            </div>
        )
    }
}

export default AdminLogin;