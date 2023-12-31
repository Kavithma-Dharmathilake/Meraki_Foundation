//common header for everything

import 'bulma/css/bulma.min.css';
import { useNavigate } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate()


    return (
        <div className='header'>

            <section className="hero is-large" style={{ backgroundColor: "#12896D" }}>
                <nav class="navbar is-success" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand mt-5 mr-5 ml-5">
                        <a>
                            <img src="images/name.png " width="100" height="100" onClick={() => { navigate("/"); }} />
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" onClick={() => { navigate("/"); }}>
                                Home
                            </a>

                            <a class="navbar-item" onClick={() => { navigate("/requests"); }}>
                                Requests
                            </a>

                            <a class="navbar-item" onClick={() => { navigate("/about"); }}>
                                About Us
                            </a>

                            <a class="navbar-item" onClick={() => { navigate("/donation"); }}>
                                Donations
                            </a>

                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-light" onClick={() => { navigate("/contact"); }}>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="columns mt-6">

                    <figure class="image is-128x128">
                        <img src="images/logo.png" style={{ marginTop: '100px', marginLeft: '150px' }} />
                    </figure>

                    <div class="column ml-0">

                        <div class="columns is-mobile">
                            <div class="column is-three-fifths is-offset-one-fifth is-justify-content-left">
                                <div style={{
                                    fontSize: "50px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }} >
                                    Helping Each other<br />
                                    Can make world better
                                </div>

                                <div className="mt-6 is-justify-content-start" style={{

                                    fontSize: "20px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }} >
                                    We seek out world changes and difference makers around the<br />
                                    globe, and equip them to fulfil their unique process
                                </div>

                                <div class="buttons mt-6 mb-6 ml-6 pl-6 pb-6" >

                                    <button
                                        class="button is-success is-medium is-hovered "
                                        onClick={() => { navigate("/login"); }}
                                        style={{zIndex:"1"}}>
                                        Login
                                    </button>
                                    <button
                                        class="button is-light is-outlined is-medium"
                                        onClick={() => { navigate("/register"); }}
                                        style={{zIndex:"1"}}>
                                        Sign up
                                    </button>

                                </div>
                            </div>


                        </div>



                    </div>





                </div>


            </section >

        </div >

    );
}

export default Header;