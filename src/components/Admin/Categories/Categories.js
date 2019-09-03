import React, { Component } from 'react';
import AdminNav from '../AdminNav';
import BottomDigishop from '../BottomDigishop';
import TitleCaption from '../TitleCaption';
import FetchCategory from './FetchCategory';
import AddCategory from './AddCategory';

class Categories extends Component {
    
    render() {
        return (
            <div>
                <AdminNav />
                
                <TitleCaption title="Categories" />

                {/* Break */}
                <div className="width-100 height-10"></div>

                <div className="row">
                    <AddCategory />
                    <FetchCategory />
                </div>

                <BottomDigishop />
            </div>
        );
    }
}

export default Categories;