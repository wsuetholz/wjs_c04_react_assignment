import React, { Component } from 'react';

class NewCountry extends Component {
    state = {}

    async handleClick()
    {
        const name = prompt('Enter Country Name');

        //const worldometer = require('worldometer-coronavirus-info')
        //const country = await worldometer.trackCountry(name)
        //const flagSmall = country.country.flagImg;
        //const flagSmallName = flagSmall.substring(flagSmall.lastIndexOf('/') + 1);
        //const flagName = flagSmallName.substring(flagSmallName.lastIndexOf('_') + 1);
        //const flag = 'https://www.worldometers.info/img/flags/' + flagName;
        const flag = '';
        //const spl = flagName.split('-');
        //const countryId = spl[0];
        const countryId = '';

        if (name && name.trim().length > 0) {
            this.props.onAddCountry(countryId, name, flag);
        }
    }
    render() {
        const { addNewCountry } = this.props;

        return (
            < div className="NewCountry" >
                <button onClick={ e => this.handleClick() }  >
                    Add New Country
                </button>
            </div>
        );
    }
}

export default NewCountry
