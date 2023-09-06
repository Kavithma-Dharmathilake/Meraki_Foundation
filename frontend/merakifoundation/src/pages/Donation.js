import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom";


const Donation = () => {

    const navigate = useNavigate();
    return (

        <div>
            <Navbar title="Five Kinds of Donations" />

            <div class="columns is-mobile mt-6 pt-6">
                <div class="column">

                </div>
            
                <div class="column" >

                    <div class="card has-background-success-light" onClick={() => { navigate("/monthly"); }}>
                        <div class="card-content">
                            <div class="content">
                            <h4 class="title is-4">Monthly Donations</h4>
                            <p class="is-size-6 has-text-centered"> Repeated Donation <br />(monthly, yearly)</p>
                            <img src="./images/donation.png" class="image is-64x64 ml-6 mt-6"  />


                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card mt-6 has-background-success-light mgt-medium" onClick={() => { navigate("/onetime"); }}>
                        <div class="card-content">
                            <div class="content">
                            <h4 class="title is-4">One time Donations</h4>
                            <p class="is-size-6 has-text-centered"> One time money or <br />cash donations</p>
                            <img src="./images/heart.png" class="image is-64x64 ml-6 mt-6"  />

                            </div>
                        </div>
                    </div>

                </div>
               

                <a href="">
                <div class="column" onClick={() => { navigate("/inkind"); }}>

                    <div class="card has-background-success-light" style={{marginTop:"150px"}}>
                        <div class="card-content">
                            <div class="content">
                            <h4 class="title is-4">In-Kind Donations</h4>
                            <p class="is-size-6 has-text-centered"> Anything except <br />cash (stationery,  <br /> food donation)</p>
                            <img src="./images/food-donation.png" class="image is-64x64 ml-6 mt-6"  />

                            </div>
                        </div>
                    </div>

                </div>
                </a>

                <div class="column">

                    <a href="">
                <div class="card has-background-success-light" onClick={() => { navigate("/memorial"); }}>
                        <div class="card-content">
                            <div class="content">
                            <h4 class="title is-4">Memorial Donations</h4>
                            <p class="is-size-6 has-text-centered"> Pay tribute in <br />memory of a loved  <br /> one</p>
                            <img src="./images/bouquet.png" class="image is-64x64 ml-6 mt-6"  />

                            </div>
                        </div>
                    </div>
                    </a>
                    <br />
                    <a href="">
                    <div class="card mt-6 has-background-success-light" onClick={() => { navigate("/blood"); }}>
                        <div class="card-content">
                            <div class="content">
                            <h4 class="title is-4">Blood Donations</h4>
                            <p class="is-size-6 has-text-centered"> Save a life </p>
                            <img src="./images/blood-extraction.png" class="image is-64x64 ml-6 mt-6"  />
                           

                            </div>
                        </div>
                    </div>
                    </a>

                </div>



                <div class="column">

                </div>

            </div>




        </div >
    );
}

export default Donation;