import React from 'react';
import Chart from '../../Chart/Chart';
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo';
import './style.css';
import {userData} from './dummyData';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} dataKey="Active User" title="User Analytics" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>            
        </div>
    )
}

export default Home
