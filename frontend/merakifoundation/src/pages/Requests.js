import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom"

const Requests = () => {
    return (

        <div>
            <Navbar title="Requests" />
            <p class="title is-3 is-spaced mt-6 ml-6 pt-6 pl-6">Donation Requests...</p>



            <div class="ml-6 pl-6 columns is-mobile mt-6">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">

                                <div class="media-content">
                                    <p class="title is-4">Donate for poor people</p>
                                    <p class="subtitle is-6 has-text-weight-bold" style={{ color: "#12896D" }}>Homeless</p>
                                </div>
                            </div>

                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <br />
                                <br />
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="column">


                </div>

                <div class="column">



                </div>

                <div class="column">



                </div>
            </div>







        </div>
    );
}

export default Requests;