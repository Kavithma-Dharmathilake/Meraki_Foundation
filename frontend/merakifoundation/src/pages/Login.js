import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, error, isLoading } = useLogin();


    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

      await login(email, password)
     
    }


    return (

        <div >


            <Navbar title="Login" />
            <div className="columns mt-6 is-mobile">
                <div className="column">
                    <figure class="image"
                    style={{width:'400px', height:'400px'}}>
                        <img src="images/image2.jpeg" style={{ marginTop: '10px', marginLeft: '120px'}} />
                    </figure>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="column card ml-5 p-5">


                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    className="input  is-primary"
                                    type="email"
                                    placeholder="hello@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />

                            </div>

                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input  is-primary"
                                    type="password" placeholder="hello@gmail.com"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password} />
                                <span className="icon is-small is-left">

                                </span>

                            </div>

                        </div>


                        <div class="buttons">

                            <input disabled={isLoading} class="button is-success" type="submit" value="Login" />

                        </div>

                        <label className="label">Do not have account?

                            <a onClick={() => { navigate("/register"); }}> Create an account</a>
                        </label>

                        {error && <div style={{
                                padding: "10px",
                                background: "#ffefef",
                                border: "1px solid var(--error)",
                                color: "var(--error)",
                                borderRadius: "4px",
                                margin: "20px 0",

                            }}>{error}</div>}

                    </div>
                </form>

                <div className="column ml-6 mt-6">
                <h1 class="title is-2 mt-6 has-text-success">Join With Us!!! <i class="fa-solid fa-heart"></i></h1>
                </div>
            </div>

        </div>
    );
}

export default Login;