import Navbar from "../common/navbar";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MemorialDonation = () => {

    const navigate = useNavigate();

    const [amount, setAmount] = useState("");
    const [username, setUsername] = useState("");

    const handleDonate = () => {
        // Check if both amount and username are provided
        if (amount && username) {
            // Navigate to the Payment page with query parameters
            window.alert('Thank you for your donation!');
            navigate(`/`);
        } else {
            // Display an error or prompt the user to fill in both fields
            alert("Please enter both the amount and username.");
        }
    };
    return (
        <div>
            <Navbar title="Memorial Donations" />
            <p
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "2em",
                    fontSize: "larger"
                }}
            >
                Pay Tribute to loved one!!
            </p>

            <div class="columns is-desktop mt-6">
                <div class="column"></div>
                <div class="column">
                    <div className="field">
                        <input type="text" class="input is-primary" placeholder="Enter the Amount" required 
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}/>
                        <br /><input type="text" class="input is-primary mt-6" placeholder="Enter the username"  required
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>
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
        
            <div class="columns">
        <div class="column is-one-third pl-6">
          <p class="is-size-5"><b>Picture in Memory</b></p><br />
            <div class="file is-boxed is-danger">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                </label>
              </div>
        </div>
        <hr class="has-background-grey-lighter" />
        <div class="column pr-6">
          <p class="is-size-5 "><b>Memorial Note</b></p><br />
          <textarea class="textarea is-primary" placeholder="Memorial Note..."></textarea>
        </div>
    </div>

    <div className="columns">
                <div className="column">
                    <div style={{  paddingLeft: "15em" }}>

                    </div>
                </div>
                <div className="column">
                    <div style={{  paddingLeft: "30em" }}>
                        <button
                            style={{ backgroundColor: "#259976", color: "#ffffff" }}
                            className="button is-rounded is-large"
                            onClick={handleDonate}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="column">
                    <div style={{ paddingLeft: "15em" }}>

                    </div>
                </div>
                <div className="column">
                    <div style={{  paddingLeft: "15em" }}>

                    </div>
                </div>

            </div>



        </div>
    );
}

export default MemorialDonation;
