import React from 'react';

function Button(props) {
    const { data, onChangePeriod } = props
    const { txt, precision, period } = data
    return (
        <button className='period-btn' onClick={() => onChangePeriod(period, precision)}>
            {txt}
        </button>
    );
}

export default Button;