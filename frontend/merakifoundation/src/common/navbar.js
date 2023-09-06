import { useNavigate } from "react-router-dom";


const Navbar = ({ title }) => {

    const navigate = useNavigate()

    return (
        <div className='header'>

            <section className="hero is-large" style={{ backgroundColor: "#12896D" }}>
                <nav class="navbar is-success" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand mt-5 mr-5 ml-5">
                        <a>
                            <img src="/images/name.png " width="100" height="100" onClick={() => { navigate("/"); }} />
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


                <div >

                    <div class="columns mb-6">
                        <div class="column is-narrow">
                            <div style={{ width: "200px" }}>
                                <figure class="image is-128x128">
                                    <img src="/images/logo.png" style={{ marginTop: '100px', marginLeft: '150px' }} />
                                </figure>
                            </div>
                        </div>
                        <div class="column">

                            <div class="title is-1 is-spaced" style={{
                                marginLeft: "150px",
                                marginTop: "140px",
                                fontSize: "50px",
                                color: "white",
                                fontWeight: "700",
                                textTransform: "capitalize"
                            }} >
                                {title}
                            </div>

                        </div>
                    </div>









                </div>


            </section >

        </div >
    );
}

export default Navbar;