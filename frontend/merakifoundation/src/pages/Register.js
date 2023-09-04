import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";



const Regsiter = () => {

    const navigate = useNavigate()
    return (

        <div>


            <div >
                <Navbar title="Register" />
                <div className="columns mt-6">
                    <div className="column is-half">is-half</div>

                    <div className="column">
                        <div className="field">

                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input  is-primary" type="text" placeholder="Text input" />
                            </div>
                        </div>



                        <div className="field">
                            <label className="label">Email</label>
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
                                Regsiter
                            </a>
                        </div>

                        <label className="label">Already have an account?
                    
                    <a onClick={() => { navigate("/login"); }}> Login</a>
                    </label>

                    </div>
                    <div className="column">

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control ">
                                <input className="input  is-primary" type="text" placeholder="Text input" />
                            </div>

                        </div>

                        <div className="field">
                            <label className="label">Phone</label>
                            <div className="control ">
                                <input className="input  is-primary" type="tel" placeholder="Text input" />
                            </div>

                        </div>

                        <div className="field">
                            <label className="label">Re-enter Password</label>
                            <div className="control">
                                <input className="input  is-primary" type="password" placeholder="hello@gmail.com" />
                                <span className="icon is-small is-left">

                                </span>

                            </div>
                        </div>

                    </div>






                </div>

            </div>
        </div>
    );
}

export default Regsiter;