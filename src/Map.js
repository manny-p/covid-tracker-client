import React from 'react';
// import * as d3 from 'd3';

function Map() {
    const Emoji = props => (<span className="emoji">{props.symbol}</span>)

    return (
        <div>
            <h3><Emoji label="sheep" symbol="😎"/>Privet!</h3>
            <h2>check console</h2>
            <svg viewBox="0 0 100 100">
                <circle cx="25" cy="25" r="20" fill="red"/>
            </svg>
        </div>
    );
}

export default Map;
