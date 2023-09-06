import Navbar from "../common/navbar";

const Terms = () => {
    return (
        <div>
            <Navbar title="Terms and Conditions" />

            <section className="section">
                <div className="container">
                    <div className="box has-background-primary-light">
                        <h1 className="title has-text-centered	">Terms and Conditions</h1>
                        <hr className="has-background-grey-lighter" />
                        <p>
                            Welcome to our Donation App. By using our platform, you agree to the
                            following terms and conditions:
                            <br />
                            <b />
                        </p>
                        <ol className="pl-6">
                            <b>
                                {" "}
                                <li>Types of Donations</li>
                            </b>
                            <br />
                            Our platform facilitates various types of donations, as described
                            below:
                            <ol type="i" className="pl-5">
                                <li>Monthly Donations</li>
                                These are recurring donations made on a monthly basis. By opting for
                                monthly donations, you authorize our platform to charge your account
                                every month.
                                <br />
                                <br />
                                <li>Memorial Donations</li>
                                Memorial donations are made in memory of a loved one. While making
                                such a donation, you can provide specific details and messages if
                                required.
                                <br />
                                <br />
                                <li>In-Kind Donations</li>
                                These are non-monetary donations, such as goods or services. The
                                platform may provide a way for donors to specify the items they wish
                                to donate and coordinate for their collection or delivery.
                                <br />
                                <br />
                                <li>One-Time Donations</li>
                                As the name suggests, these are one-off donations without any
                                recurring commitments.
                                <br />
                                <br />
                                <li>Blood Donations</li>
                                For blood donations, the donor agrees to provide accurate health
                                information. The platform may coordinate with health organizations
                                or hospitals to facilitate the donation process.
                            </ol>
                            <br />
                            <br />
                            <li>
                                <b>Payment and Refund Policy</b>
                            </li>
                            All donations made via the platform are processed using secure payment
                            gateways. In case of any discrepancies, donors are requested to reach
                            out within seven days for refunds or corrections.
                            <br />
                            <br />
                            <li>
                                <b>User Conduct</b>
                            </li>
                            Users agree not to misuse the platform, provide false information, or
                            use the platform for illegal activities.
                            <br />
                            <br />
                            <li>
                                <b>Changes to Terms</b>
                            </li>
                            We reserve the right to modify these terms and conditions at any time.
                            Users are encouraged to regularly review these terms to stay updated.
                            <br />
                            <br />
                            <li>
                                <b>Contact Us</b>
                            </li>
                            If you have any questions or concerns about these terms, please
                            contact us.
                        </ol>
                        <br />
                        <br />
                        <i>Last updated: 5th of September 2023</i>
                        <p />
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Terms;