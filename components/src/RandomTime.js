import React from 'react';

/*export function getRandomTime() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const newRandowmDate = new Date(timestamp);
    return newRandowmDate.toDateString()
}*/

const RandomTime = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const newRandomDate = new Date(timestamp);

    return (
        <div>
            {newRandomDate.toDateString()}
        </div>
    )
}

export default RandomTime;