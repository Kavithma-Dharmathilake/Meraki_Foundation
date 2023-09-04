import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()
    return (

        <div >


            <Navbar title="Login" />
            <div className="columns mt-6">
                <div className="column is-half">is-half</div>

                <div className="column">

                    
                    <div className="field">
                        <label className="label">User Name or Email</label>
                        <div className="control">
                            <input className="input  is-primary" type="email" placeholder="hello@gmail.com" />

                        </div>

                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input  is-primary" type="password" placeholder="hello@gmail.com" />
                            <span className="icon is-small is-left">

                            </span>

                        </div>

                    </div>


                    <div class="buttons">
                        <a class="button is-success" onClick={() => { navigate("/donation"); }}>
                            Login
                        </a>
                    </div>

                    <label className="label">Do not have account?
                    
                     <a onClick={() => { navigate("/register"); }}> Create an account</a>
                     </label>

                </div>

                <div className="column"></div>







            </div>

        </div>
    );
}

export default Login;