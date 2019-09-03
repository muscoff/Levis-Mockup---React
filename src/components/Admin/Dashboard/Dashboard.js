import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <AdminNav>
                    <span className="white-text cursor-pointer">logout</span>
                </AdminNav>
                <div className="font-20 center-text capitalize font-allerBd padding-all-10">Welcome to your dashboard</div>
                
                <BottomDigishop />
            </div>
        )
    }
}

export default Dashboard;