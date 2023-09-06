import Navbar from "../common/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../index.css';



const Payment = () => {

    const { amount1, username1 } = useParams();

    const navigate = useNavigate();
    const history = useNavigate();
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [method, setMethod] = useState(null);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null)


    useEffect(() => {
        if (amount1) setAmount(amount);
        if (username1) setUsername(username);
    }, [amount1, username1]);

    const handleSubmit = async (e) => {

        e.preventDefault()


        const payment = {amount, type, method,fname,lname,email,username,comment}

        const response = await fetch('/api/payment', {


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
            setAmount('')
            setComment('')
            setEmail('')
            setFname('')
            setLname('')
            setMethod('')
            setType('')
            setUsername('')
           
             // Show a thank you message using window.alert
             window.alert('Thank you for your donation!');

             // Redirect to the home page
             setTimeout(() => {
                window.location.href = '/'; // Replace '/' with the desired URL
            }, 3000);
        }
    } 


    return (
<div>
        <Navbar title="Payment Portal" /> 

        <section className="section" style={{marginLeft:'300px'}}>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="box has-background-primary-light">
                    <h1 className="title">Your Donation</h1>
                    <hr className="has-background-grey-lighter" />
                    <input
                        className="input is-primary mt-3"
                        type="text"
                        placeholder="Donation Amount"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                    <div className="columns">
                        <div className="column">
                            <button className="mt-6 button is-medium has-background-grey has-text-light">
                                Rs. 500
                            </button>
                        </div>
                        <div className="column">
                            <button className="mt-6 button is-medium has-background-grey has-text-light">
                                Rs. 1000
                            </button>
                        </div>
                        <div className="column">
                            <button className="mt-6 button is-medium has-background-grey has-text-light">
                                Rs. 5000
                            </button>
                        </div>
                        <div className="column">
                            <button className="mt-6 button is-medium has-background-grey has-text-light">
                                Rs. 10000
                            </button>
                        </div>
                        <div className="column">
                            <button className="mt-6 button is-medium has-background-grey has-text-light">
                                Customize Amount
                            </button>
                        </div>

                       
                    </div>

                    <input
                        className="input is-primary mt-3"
                        type="text"
                        placeholder="Donation Type"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    />
                    <h1 className="title mt-5">Select Payment Method</h1>
                    <div className="control">
                        <label className="radio">
                            <input type="radio"
                             name="answer"
                             onChange={(e) => setMethod(e.target.value)}
                             value="online" />
                            Online Donations &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label className="radio">
                            <input type="radio" name="answer" 
                             onChange={(e) => setMethod(e.target.value)}
                             value="offline"/>
                            Offline Donations
                        </label>
                    </div>
                    <h1 className="title mt-5">Personal Information</h1>
                    <hr className="has-background-grey-lighter" />
                    <div className="columns">
                        <div className="column">
                            <input
                                className="input is-primary"
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setFname(e.target.value)}
                                value={fname}
                            />
                        </div>
                        <div className="column">
                            <input
                                className="input is-primary"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLname(e.target.value)}
                                value={lname}
                            />
                        </div>
                    </div>

                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-primary"
                            type="text"
                            placeholder="Your username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                       
                    </div>
                    <br />
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-primary"
                            type="email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                      
                    </div>
                    <textarea
                        className="textarea is-primary mt-5"
                        placeholder="Leave a Comment Here..."
                        defaultValue={""}
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    <label className="checkbox mt-5">
                        <input type="checkbox" />I agree to the{" "}
                        <a href="#" onClick={() => navigate("/terms")}>terms and conditions</a>
                    </label>
                    <br />
                    <button className="button is-primary is-outlined mt-5">Donate</button>
                </div>
            </div>

            {error && <div className="error">{error}</div>}
            </form>
        </section>
        </div>
    );
}

export default Payment;