import React, { useState } from 'react'

function Explore() {

    const [curPlanet, setCurPlanet] = useState([]);
    const [enteredName, setEnteredName] = useState('');

    const getPlanet = async (pl_name) => {
        // const response = await fetch(`https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+pl_name+=+%2711%20Com%20b%27&format=json`);
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+pl_name+=+%2711%20Com%20b%27&format=json`);
        // const response = await fetch(`https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_masse,ra,dec+from+ps+where+upper(soltype)+like+'%CONF%'+and+pl_masse+between+0.5+and+2.0`, {mode:'no-cors'}).then(response=>{
        //     console.log(response)
        // })
        let planet = await response.json();
        setCurPlanet(planet);
        console.log(planet);
    }

    const handleClick = (pl_name) => {
        getPlanet(pl_name);
    }

    return (
        <>
            <div className="planet-search-container">
                <h2 className="search-title">Planet Search</h2>
                <input
                    type="text"
                    placeholder="Enter planet name"
                    value={enteredName}
                    onChange={(e) => setEnteredName(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleClick} className="search-button">
                    Search
                </button>
            </div>
        </>
    )
}

export default Explore