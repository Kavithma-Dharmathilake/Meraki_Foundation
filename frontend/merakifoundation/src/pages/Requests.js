import Navbar from "../common/navbar";
import { useNavigate ,Link } from "react-router-dom"
import React, { useEffect, useState } from "react";


const Requests = () => {

    const [requests, setRequests] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchRequests = async () => {

            const response = await fetch('/api/donreq')
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
            <Navbar title="Requests" />
            <p class="title is-3 is-spaced mt-6 ml-6 pt-6 pl-6">Donation Requests...</p>

            {/* Map over rows and render cards */}
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="ml-6 pl-6 columns is-mobile mt-6">
                    {row.map((request) => (
                        <div key={request._id} className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="/images/donreq.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            {/* Populate card content with data from the request */}
                                            <p className="title is-4">{request.title}</p>
                                            <p className="subtitle is-6 has-text-weight-bold" style={{ color: "#12896D" }}>{request.category}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {/* {request.Description} */}
                                        {/* <br />
                                        <br /> */}
                                        <time dateTime={request.date}>
                                            {new Date(request.date).toLocaleString()}
                                        </time><br/>
                                        <button className="button mt-4 is-success" >
                                        <Link to={`/requests/${request._id}`}>View More</Link>
                                           
                                        </button>
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

export default Requests;