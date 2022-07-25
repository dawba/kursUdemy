import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";

class App extends React.Component{

    state = {lat: null, errorMessage: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage: error.message});
            }
        );
    }

    renderHelper() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else
            return <LoadingSpinner text="waiting for geolocation..."/>
    }

    render() {
        return (
            <div className="border-red">
                {this.renderHelper()}
            </div>
        )
    }
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);