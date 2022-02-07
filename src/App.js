import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import Country from './components/country';
import Medal from "./components/medal";

class App extends Component {
    state = {
        countries: [
            {
                id: 'as',
                name: 'Australia',
                flag: 'http://worldometers.info/img/flags/as-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            },
            {
                id: 'nr',
                name: 'Nauru',
                flag: 'http://worldometers.info/img/flags/nr-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            },
            {
                id: 'nz',
                name: 'New Zealand',
                flag: 'http://worldometers.info/img/flags/nz-flag.gif',
                bronze: 0,
                gold: 0,
                silver: 0
            }
        ],
        medalList: [
            { id: 1, deco: 'MedalCountBronze', medalType: 'bronze' },
            { id: 2, deco: 'MedalCountSilver', medalType: 'silver' },
            { id: 3, deco: 'MedalCountGold', medalType: 'gold' }
        ]

    }

    handleAdjustCount = (countryId, medalType, adjustBy) => {
        const countries = [...this.state.countries];
        const idx = countries.findIndex(c => c.id === countryId);
        if (idx !== -1) {
            const min = 0;
            const max = 999999;

            var result = countries[idx][medalType] + adjustBy;

            if (result < min)
                result = min;
            if (result > max)
                result = max;

            countries[idx][medalType] = result;
        }

        this.setState({ countries: countries });
    }

    getTotalMedalCountByType = (medalType) => {
        let sum = this.state.countries.reduce((a, b) => a + b[medalType], 0);
        return sum;
    }

    getTotalMedalCount = () => {
        let sum = this.state.countries.reduce((a, b) => a + (b.bronze + b.gold + b.silver), 0);
        return sum;
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                    </header>
                    { this.state.countries.map( country =>
                        <Country key={ country.id } country={ country } onChangeValue={ this.handleAdjustCount }
                    />)}
                    <div>
                        <div>
                            Total Medal Count:
                            <span>
                                { this.getTotalMedalCount () }
                            </span>
                        </div>

                    </div>
                </div>
            </React.Fragment>
            );
    }

}

export default App;
