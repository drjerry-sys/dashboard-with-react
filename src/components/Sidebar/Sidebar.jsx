import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import './style.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sideListItem active">
                                <LineStyle className="sidebarIcon" />Home
                            </li>
                        </Link>
                        <li className="sideListItem">
                            <Timeline className="sidebarIcon" />Analytics
                        </li>
                        <li className="sideListItem">
                            <TrendingUp className="sidebarIcon" />Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sideListItem">
                                <PermIdentity className="sidebarIcon" />Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sideListItem">
                                <Storefront className="sidebarIcon" />Products
                            </li>
                        </Link>
                        <li className="sideListItem">
                            <BarChart className="sidebarIcon" />Transactions
                        </li>
                        <li className="sideListItem">
                            <TrendingUp className="sidebarIcon" />Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sideListItem">
                            <MailOutline className="sidebarIcon" />Mail
                        </li>
                        <li className="sideListItem">
                            <DynamicFeed className="sidebarIcon" />Feedback
                        </li>
                        <li className="sideListItem">
                            <ChatBubbleOutline className="sidebarIcon" />Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sideListItem">
                            <WorkOutline className="sidebarIcon" />Manage
                        </li>
                        <li className="sideListItem">
                            <Timeline className="sidebarIcon" />Analytics
                        </li>
                        <li className="sideListItem">
                            <Report className="sidebarIcon" />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
