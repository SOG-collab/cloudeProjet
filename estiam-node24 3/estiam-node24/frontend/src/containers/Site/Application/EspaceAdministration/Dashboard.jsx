import React, { Component } from 'react';
import IntervenantStats from './IntervenantStats';

class Dashboard extends Component {
    state = {
        filterClass: 'all',
    };

    handleFilterChange = (event) => {
        this.setState({ filterClass: event.target.value });
    };

    render() {
        return (
            <section className="dashboard">
                <div className="card filter-card">
                    <h3>Filtrer par Classe</h3>
                    <select onChange={this.handleFilterChange}>
                        <option value="all">Toutes les Classes</option>
                        <option value="E4S1">E4 - Spécialité 1</option>
                        <option value="E4S2">E4 - Spécialité 2</option>
                        <option value="E5S1">E5 - Spécialité 1</option>
                        <option value="E5S2">E5 - Spécialité 2</option>
                        <option value="BTS1">BTS 1ère Année</option>
                        <option value="BTS2">BTS 2ème Année</option>
                    </select>
                </div>

                <div className="card">
                    <h3>Intervenants</h3>
                    {/* Passer le filtre de classe au composant IntervenantStats */}
                    <IntervenantStats filterClass={this.state.filterClass} />
                </div>
            </section>
        );
    }
}

export default Dashboard;

