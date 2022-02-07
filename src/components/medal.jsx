import React, { Component } from 'react';

class Medal extends Component {

    render() {
        const { countryId, onChangeValue, medal } = this.props;

        return (
            <a className={medal.deco} >
                <button onClick={ e => { onChangeValue (countryId, medal.medalType, -1); }} className='IncrMedalButton' >
                    -
                </button>
                { medal.count }
                <button onClick={ e => { onChangeValue (countryId, medal.medalType, 1); }} className='IncrMedalButton' >
                    +
                </button>
            </a>
        );
    }
}

export default Medal
