import React, { Component } from 'react';

class IncrDecrButtons extends Component {

    render() {
        const { countryId, onChangeValue, medal } = this.props;

        return (
            <a className="IncrMedalButtons" >
                <button onClick={ e => { onChangeValue (countryId, medal.medalType, -1); }} className='IncrMedalButton' >
                    -
                </button>
                <button onClick={ e => { onChangeValue (countryId, medal.medalType, 1); }} className='IncrMedalButton' >
                    +
                </button>
            </a>
        );
    }
}

export default IncrDecrButtons
