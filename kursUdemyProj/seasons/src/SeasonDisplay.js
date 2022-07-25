import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Based on geolocation it is summer!",
        iconName: "sun"
    },
    winter: {
        text: "Based on geolocation it is winter!",
        iconName: "snowflake"
    }
}

const determineSeason = (lat, month) => {
    if(month >= 3 && month <= 8) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {
    const season = determineSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1 className="text">
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;