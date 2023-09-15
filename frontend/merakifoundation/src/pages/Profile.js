import Navbar from "../common/navbar";
import '../index.css';
import { useNavigate, Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";



const Profile = () => {

    const { id } = useParams();
    const [request, setRequest] = useState(null);
    const [userData, setUserData] = useState(null);
    const { user } = useAuthContext();


    useEffect(() => {
        const fetchRequestDetails = async () => {
            try {
                const response = await fetch(`https://meraki-backend.onrender.com/api/userProfile/`, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const json = await response.json();
                setRequest(json);
            } catch (error) {
                console.error(error);
                // Handle errors here
            }
        };

        if (user && user.email) {
            // Make a GET request to your server's API endpoint using the user's email
            fetch(`https://meraki-backend.onrender.com/api/user/${user.email}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUserData(data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                    // Handle errors here
                });
        }

        fetchRequestDetails();
    }, [id, user]);

    if (!request || !userData) {
        return <div>Loading...</div>; // Display a loading state
    }

    return (

        <div>
            <Navbar title="Welcome to MERAKI Foundation" />


            <br /><br />

            <div class="profile">
                <div className="column is-mobile">
                    <div className="column">
                        <div class="image-container mr-6">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src="/images/profile.png" width="200px" height="200px" />
                        </div>
                    </div>
                    <div className="column ml-6">
                        <table class="has-text-left">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{userData.Name}</td>

                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Mail:</td>
                                <td>{userData.email}</td>

                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{userData.phone}</td>

                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td>{userData.username}</td>

                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div class="buttons">
                                        <button class="button is-primary is-light">Edit</button>
                                    </div></td>
                                <td> <br /><div class="buttons">
                                    <button class="button is-primary is-light">Log Out</button>
                                </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>

            <div>
                <hr />
            </div>


            <div class="columns is-mobile">
                <div class="column">
                    <br /><br /><div class="has-text-left ml-6 pl-6 mgl-large">
                        <b><centre>List Of Your Donations To The Needy</centre></b><br /></div>
                    <div class="aligntable">
                        <table class="table is-striped">

                            <br />
                            <thead>
                                <tr>
                                    <th>DonateID</th>
                                    <th>Donate Type</th>
                                    <th>date</th>
                                    <th>Amount/Material</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IK12</td>
                                    <td>In-Kind</td>
                                    <td>20/08/2023</td>
                                    <td>Rs.50 000.00</td>

                                </tr>
                                <tr>
                                    <td>MM32</td>
                                    <td> Memorial</td>
                                    <td>20/07/2023</td>
                                    <td>Rs.5000.00</td>
                                </tr>
                                <tr>
                                    <td>MN08</td>
                                    <td>Monthly</td>
                                    <td>03/07/2023</td>
                                    <td>Rs.20 000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="column">
                    <div class="has-text-left ml-6 pl-6 mt-6">
                        <b ><centre>Notification On Your Donations</centre></b><br /></div><br />
                    <div class="notification is-primary is-light mt-3">
                        <button class="delete"></button><div class="para">
                            "We extend our heartfelt gratitude for your generous contribution of Rs.50 000.00 on September 20, 2023, to our Meraki Foundation. Your support is invaluable in our mission to make a positive impact on the lives of those in need. Your kindness keeps our efforts alive, and we are sincerely thankful for your belief in our cause. Together, we can create a brighter future for our community. Thank you for your generosity!"
                        </div></div>


                    <div class="notification is-success is-light">
                        <button class="delete"></button><div class="para">
                            "We deeply appreciate your Rs. 5000.00 donation on July 20, 2023. Your support is crucial in our mission to help those in need. Your kindness keeps us going, and we're truly grateful for your belief in our cause. Together, we create a brighter future."

                        </div>


                    </div>
                </div>

            </div>

        </div>

    );
}


export default Profile;