import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import '../index.css';

const Contact = () => {

    
    const navigate = useNavigate();
    const history = useNavigate();
  
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()


        const payment = {fname,lname,email,phone, msg}

        const response = await fetch('/api/contact', {


            method:'POST',
            body:JSON.stringify(payment),
            headers:{

                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setEmail('')
            setFname('')
            setLname('')
            setMsg('')
            setPhone('')
          
             // Show a thank you message using window.alert
             window.alert('Request Sent successfully!');

        }
    } 


    return (

        <div>
            <Navbar title="Contact Us" />

            <h1 className="title mt-6 ml-6">Send Your Donation Request</h1>
            <div class="columns mt-6">
            <form style={{width:"800px"}} onSubmit={handleSubmit}>
                <div class="column ml-6">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input custom-light-green " type="text" placeholder="First Name" required
                                     onChange={(e) => setFname(e.target.value)}
                                     value={fname} />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Last Name" required
                                     onChange={(e) => setLname(e.target.value)}
                                     value={lname} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Mail</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Your Email" required
                                     onChange={(e) => setEmail(e.target.value)}
                                     value={email} />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input custom-light-green" type="text" placeholder="Your phone number" required
                                     onChange={(e) => setPhone(e.target.value)}
                                     value={phone} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea custom-light-green" placeholder="Type your message here..."
                             onChange={(e) => setMsg(e.target.value)}
                             value={msg}></textarea>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control ">
                            <button class="button is-success">Send Message</button>
                        </div>

                    </div>
                </div>

                {error && <div className="error">{error}</div>}
                </form>

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