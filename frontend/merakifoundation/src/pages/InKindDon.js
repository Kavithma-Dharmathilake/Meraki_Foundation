import Navbar from "../common/navbar";

const InKindDonation = () => {
    return (
        <div>
            <Navbar title="In-Kind Donations" />

            <p
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "2em",
                    fontSize: "larger"
                }}
            >
                Donations that are not monetry in nature can be donated through this page<br /><br />
            </p>

            <div className="columns is-mobile">
                <div className="column">1</div>
                <div className="column">
                    <input type="text" className="input is-primary" placeholder="The type"  required/><br />
                    <input type="text" className="input is-primary mt-6" placeholder="Quantity" required/><br />
                    <input type="text" className="input is-primary mt-6" placeholder="username" required/><br />


                </div>
                <div className="column"></div>
            </div>


            <div className="columns is-mobile mt-6">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">
                    <button className="button is-success is-medium is-light">Food</button>
                </div>
                <div className="column">  <button className="button is-success is-medium is-light">Cloth</button></div>
                <div className="column">  <button className="button is-success is-medium is-light">Medicine</button></div>
                <div className="column">  <button className="button is-success is-medium is-light">Dry rations</button></div>
                <div className="column">  <button className="button is-success is-medium is-light">Stationery</button></div>
                <div className="column"></div>
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

export default InKindDonation;