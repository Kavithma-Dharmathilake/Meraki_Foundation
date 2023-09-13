import Navbar from "../common/navbar";
import { useNavigate, Link } from "react-router-dom"
import React, { useEffect, useState } from "react";


const BloodDonation = () => {

    const [requests, setRequests] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchRequests = async () => {

            const response = await fetch('https://meraki-backend.onrender.com/api/blood')
            const json = await response.json();

            if (response.ok) {
                setRequests(json);
            }
        }

        fetchRequests();
    }, []);

    if (!requests) {
        return null; // or display a loading indicator
    }


    const rows = [];
    for (let i = 0; i < requests.length; i += 4) {
        rows.push(requests.slice(i, i + 4));
    }
    return (
        <div>
            <Navbar title="Blood Donations" />

            <p class="title is-3 is-spaced mt-6 ml-6 pt-6 pl-6">Blood Donation Requests...</p>

            {/* Map over rows and render cards */}
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="ml-6 pl-6 columns is-mobile mt-6">
                    {row.map((request) => (
                        <div key={request._id} className="column">
                            <div className="card has-background-dark has-text-primary-light">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="/images/map.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            {/* Populate card content with data from the request */}
                                            <p className="title is-4 has-text-primary-light">{request.location}</p>
                                            <p className="subtitle is-6 has-text-weight-bold" style={{ color: "#12896D" }}>Organized by: {request.organized}</p>
                                            <p >Telephone: {request.contact}</p>

                                        </div>
                                    </div>
                                    <div className="content">
                                        {/* {request.Description} */}
                                        {/* <br />
                            <br /> */}
                                        <time dateTime={request.date}>
                                            Date:{new Date(request.date).toLocaleString()}
                                        </time><br />

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}


        </div>
    );
}

export default BloodDonation;