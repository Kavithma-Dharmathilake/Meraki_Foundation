import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom"

const Contact = () => {
    return (

        <div>
            <Navbar title="Contact Us" />


            <div class="columns mt-6">
                <div class="column ml-6">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input custom-light-green " type="text" placeholder="First Name" required />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Last Name" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Mail</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Your Email" required />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Your phone number" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea custom-light-green" placeholder="Type your message here..."></textarea>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control ">
                            <button class="button is-success">Send Message</button>
                        </div>

                    </div>
                </div>

                <div class="column">
                    <div class="notification custom-light-green">
                        <strong>Address</strong>
                        <p>If you want to contact us in other ways:</p> <br />
                        <p>Location: <b>4517 loremipsum, lorem psum</b></p>
                        <p>Phone: <b>+9412345678</b></p>
                        <p>Email: <b>merakifoundation@gmail.com</b></p>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Contact;