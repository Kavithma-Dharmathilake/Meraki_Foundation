import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OneTimeDonation = () => {

    const navigate = useNavigate();

    const [amount1, setAmount] = useState("");
    const [username1, setUsername] = useState("");

    const handleDonate = () => {
        // Check if both amount and username are provided
        if (amount1 && username1) {
            // Navigate to the Payment page with query parameters
            navigate(`/payments/${amount1}/${username1}`);
        } else {
            // Display an error or prompt the user to fill in both fields
            alert("Please enter both the amount and username.");
        }
    };
    return (
        <div>
            <Navbar title="One Time Donations" />

            <p
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "2em",
                    fontSize: "larger"
                }}
            >
                How much do you want donate?
            </p>

            <div class="columns is-desktop mt-6">
                <div class="column"></div>
                <div class="column">
                    <div className="field">
                        <input type="text" class="input is-primary" placeholder="Enter the Amount" required onChange={(e) => setAmount(e.target.value)}
                        value={amount1} />
                        <br /><input type="text" class="input is-primary mt-6" placeholder="Enter the username" required  onChange={(e) => setUsername(e.target.value)}
                        value={username1}/>
                    </div>
                </div>
                <div class="column"></div>

            </div>

            <div></div>
            <div class="columns is-desktop mt-6">
                <div class="column"><button className="button is-success ml-6 is-large">Rs.500</button></div>
                <div class="column"> <button className="button is-success ml-6 is-large">Rs.1000</button></div>
                <div class="column"> <button className="button is-success ml-6 is-large">Rs.5000</button></div>
                <div class="column"> <button className="button is-success ml-6 is-large">Rs.10000</button></div>
                <div class="column"> <button className="button is-success ml-6 is-large">Custom</button></div>
            </div>
            <div className="columns">
                <div className="column">
                    <div style={{ marginTop: "5em", paddingLeft: "15em" }}>

                    </div>
                </div>
                <div className="column">
                    <div style={{ marginTop: "5em", paddingLeft: "15em" }}>
                        <button
                            style={{ backgroundColor: "#259976", color: "#ffffff" }}
                            className="button is-rounded is-large"
                            onClick={handleDonate}
                        >
                            Donate
                        </button>
                    </div>
                </div>

                <div className="column">
                    <div style={{ marginTop: "5em", paddingLeft: "15em" }}>

                    </div>
                </div>
                <div className="column">
                    <div style={{ marginTop: "5em", paddingLeft: "15em" }}>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default OneTimeDonation;