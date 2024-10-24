import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

class EspaceAdministration extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Dashboard />
                </div>
            </div>
        );
    }
}

export default EspaceAdministration;
