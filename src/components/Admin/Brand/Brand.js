import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import AddBrand from './AddBrand';
import FetchBrand from './FetchBrand';

class Brand extends Component {
    render() {
        return (
            <div>
                <AdminNav />

                <AddBrand />

                <FetchBrand />

                <BottomDigishop />
            </div>
        )
    }
}

export default Brand;