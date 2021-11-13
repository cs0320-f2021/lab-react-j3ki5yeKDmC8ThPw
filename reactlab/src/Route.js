import React, {useState} from 'react';
import {AwesomeButton} from "react-awesome-button";
import axios from 'axios';


function Route() {

    const [startLat, setStartLat] = useState(0);
    const [endLat, setEndLat] = useState(0);
    const [startLong, setStartLong] = useState(0);
    const [endLong, setEndLong] = useState(0);

    //TODO: Fill in the ? with appropriate names/values for a route.
    //Hint: The defaults for latitudes and longitudes were 0s. What might the default useState value for a route be?
    const [startRoute, setRoute] = useState([]);

    /**
     * Makes an axios request.
     */
    const requestRoute = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            srclat : startLat,
            srclong : startLong,
            destlat : endLat,
            destlong : endLong
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import this!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post(
            "http://localhost:4567/route",
                toSend,
                config
        )
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what variable you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setRoute(response.data["route"]);
            })

            .catch(function (error) {
                console.log(error);

            });
    }


    return (
        <div className="Route">
            <header className="Route-header">
                <p>
                    Route Header
                </p>
            </header>
            <TextBox label={"Start Latitude"} change={setStartLat}/>
            <TextBox label={"End Latitude"} change={setEndLat}/>
            <TextBox label={"Start Longitude"} change={setStartLong}/>
            <TextBox label={"End Longitude"} change={setEndLong}/>
            <AwesomeButton type="primary" onPress={requestRoute}>Submit</AwesomeButton>

        </div>
    );
}

export default Route;