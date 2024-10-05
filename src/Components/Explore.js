import React, { useState } from 'react';
import './Home.css'; // Make sure to import the CSS file
import PlanetSimulation from './PlanetSimulation';

function Explore() {
    const [curPlanet, setCurPlanet] = useState(null);
    const [enteredName, setEnteredName] = useState('');
    const [error, setError] = useState(null); // Add error state

    const planet_data = [{
        "pl_name": "OGLE-TR-10 b",
        "hostname": "OGLE-TR-10",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Transit",
        "disc_year": 2004,
        "disc_facility": "OGLE",
        "pl_orbper": 3.101278,
        "pl_orbsmax": 0.0434,
        "pl_masse": 197.046,
        "pl_massj": 0.62,
        "pl_orbeccen": null,
        "st_spectype": null,
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "BD-08 2823 b",
        "hostname": "BD-08 2823",
        "sy_snum": 1,
        "sy_pnum": 2,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2009,
        "disc_facility": "La Silla Observatory",
        "pl_orbper": 5.6,
        "pl_orbsmax": 0.056,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.15,
        "st_spectype": "K3 V",
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "BD-08 2823 c",
        "hostname": "BD-08 2823",
        "sy_snum": 1,
        "sy_pnum": 2,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2009,
        "disc_facility": "La Silla Observatory",
        "pl_orbper": 237.6,
        "pl_orbsmax": 0.68,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.19,
        "st_spectype": "K3 V",
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "HD 104985 b",
        "hostname": "HD 104985",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2003,
        "disc_facility": "Okayama Astrophysical Observatory",
        "pl_orbper": 198.2,
        "pl_orbsmax": 0.78,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.03,
        "st_spectype": null,
        "releasedate": "2014-05-16"
    },
    {
        "pl_name": "bet Pic b",
        "hostname": "bet Pic",
        "sy_snum": 1,
        "sy_pnum": 2,
        "discoverymethod": "Imaging",
        "disc_year": 2008,
        "disc_facility": "Paranal Observatory",
        "pl_orbper": 7482.5,
        "pl_orbsmax": 9.04,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.06,
        "st_spectype": null,
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "bet Pic b",
        "hostname": "bet Pic",
        "sy_snum": 1,
        "sy_pnum": 2,
        "discoverymethod": "Imaging",
        "disc_year": 2008,
        "disc_facility": "Paranal Observatory",
        "pl_orbper": null,
        "pl_orbsmax": null,
        "pl_masse": 2224.81,
        "pl_massj": 7,
        "pl_orbeccen": null,
        "st_spectype": null,
        "releasedate": "2015-08-13"
    },
    {
        "pl_name": "4 UMa b",
        "hostname": "4 UMa",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2006,
        "disc_facility": "Thueringer Landessternwarte Tautenburg",
        "pl_orbper": 269.3,
        "pl_orbsmax": 0.87,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.432,
        "st_spectype": "K1 III",
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "HD 104985 b",
        "hostname": "HD 104985",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2003,
        "disc_facility": "Okayama Astrophysical Observatory",
        "pl_orbper": 199.505,
        "pl_orbsmax": 0.95,
        "pl_masse": null,
        "pl_massj": null,
        "pl_orbeccen": 0.09,
        "st_spectype": "G9 III",
        "releasedate": "2014-05-14"
    },
    {
        "pl_name": "kap CrB b",
        "hostname": "kap CrB",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2007,
        "disc_facility": "Lick Observatory",
        "pl_orbper": 1261.94,
        "pl_orbsmax": 2.8,
        "pl_masse": 635.66,
        "pl_massj": 2,
        "pl_orbeccen": 0.044,
        "st_spectype": null,
        "releasedate": "2015-10-15"
    },
    {
        "pl_name": "kap CrB b",
        "hostname": "kap CrB",
        "sy_snum": 1,
        "sy_pnum": 1,
        "discoverymethod": "Radial Velocity",
        "disc_year": 2007,
        "disc_facility": "Lick Observatory",
        "pl_orbper": 1251,
        "pl_orbsmax": 2.6,
        "pl_masse": 591.1638,
        "pl_massj": 1.86,
        "pl_orbeccen": 0.073,
        "st_spectype": null,
        "releasedate": "2015-10-15"
    }];

    const getPlanet = async (planetName) => {
        const planet = planet_data.find((p) => p.pl_name.toLowerCase() === planetName.toLowerCase());

        // If the planet is found, return the details
        if (planet) {
            return {
                "Planet Name": planet.pl_name,
                "Host Star": planet.hostname,
                "Star Number": planet.sy_snum,
                "Planet Number": planet.sy_pnum,
                "Discovery Method": planet.discoverymethod,
                "Discovery Year": planet.disc_year,
                "Discovery Facility": planet.disc_facility,
                "Orbital Period (days)": planet.pl_orbper,
                "Orbital Semi-Major Axis (AU)": planet.pl_orbsmax,
                "Mass (Earth Masses)": planet.pl_masse,
                "Mass (Jupiter Masses)": planet.pl_massj,
                "Orbital Eccentricity": planet.pl_orbeccen,
                "Spectral Type": planet.st_spectype,
                "Release Date": planet.releasedate
            };
        } else {
            setError(`Planet "${planetName}" not found.`);
            return null; // Return null if not found
        }
    }

    const handleSearch = async () => {
        setError(null); // Clear any previous error
        const planetDetails = await getPlanet(enteredName); // Wait for planet details
        setCurPlanet(planetDetails);
    }

    return (
        <>
            <div className="planet-details-container mt-5">
                <h2>Planet Search</h2>
                <input
                    type="text"
                    placeholder="Enter planet name"
                    value={enteredName}
                    onChange={(e) => setEnteredName(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>

                {error && <p className="error-text">{error}</p>} {/* Show error if exists */}

                <h6 className='text-center text-light mt-4'>Source: NASA Exoplanet Archieve</h6>

            </div>
            {curPlanet && (
                <div className="details-box mt-5">
                    <h3>Planet Details:</h3>
                    <table className="planet-details-table">
                        <tbody>
                            {Object.entries(curPlanet).map(([key, value], index) => (
                                <tr key={index}>
                                    <td className="table-key"><strong>{key}</strong></td>
                                    <td className="table-value">{value !== null ? value : 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Explore;
