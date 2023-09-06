import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignUp } from '../hooks/useSignUp';

function Regsiter() {

    const navigate = useNavigate();
    const { signup, error, isLoading } = useSignUp();

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()

       const result =  await signup(name, username, email, phone, password)
       console.log(result);
    }


    return (

        <div>


            <div >
                <Navbar title="Register" />
                <div className="columns mt-6 is-mobile">
                    <div class="column">
                    <div className="column">
                    <figure class="image"
                    style={{width:'400px', height:'400px'}}>
                        <img src="images/image3.png" style={{ marginTop: '10px', marginLeft: '50px'}} />
                    </figure>
                </div>
                    </div>

                    <div className="column card ml-5 p-5">
                        <form onSubmit={handleSubmit} >
                            <div className="field">

                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        className="input  is-primary"
                                        type="text"
                                        placeholder="Text input"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}

                                    />
                                </div>
                            </div>



                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input  is-primary"
                                        type="email"
                                        placeholder="hello@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} />

                                </div>

                            </div>



                            <div className="column">
                            </div>
                            <div className="column">

                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control ">
                                        <input
                                            className="input  is-primary"
                                            type="text" placeholder="Text input"
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username} />
                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label">Phone</label>
                                    <div className="control ">
                                        <input
                                            className="input  is-primary"
                                            type="tel"
                                            placeholder="+941279545"
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={phone} />
                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            className="input  is-primary"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password} />
                                        <span className="icon is-small is-left">

                                        </span>

                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label">Re-enter Password</label>
                                    <div className="control">
                                        <input className="input  is-primary" type="password" />
                                        <span className="icon is-small is-left">

                                        </span>

                                    </div>
                                </div>

                            </div>




                            <div class="buttons">
                                <input disabled={isLoading} type="submit" className="button is-success" value="Register" />
                            </div>

                            <label className="label">Already have an account?

                                <a onClick={() => { navigate("/login"); }}> Login</a>
                            </label>

                            {error && <div style={{
                                padding: "10px",
                                background: "#ffefef",
                                border: "1px solid var(--error)",
                                color: "var(--error)",
                                borderRadius: "4px",
                                margin: "20px 0",

                            }}>{error}</div>}







                        </form>

                    </div>

                    <div className="column">
                    <h1 class="title is-2 mt-6 has-text-success">Join With Us!!! <i class="fa-solid fa-heart"></i></h1>
                    </div>




                </div>

            </div>
        </div>
    );
}

export default Regsiter;