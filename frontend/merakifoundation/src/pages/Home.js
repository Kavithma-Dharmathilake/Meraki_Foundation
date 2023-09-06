import Header from '../common/header';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();



    return (

        <div>
            <Header />

            <div class="columns is-mobile mt-6">
                <div class="column">

                    <div class="image-container">
                        <img src="./images/hand.jpg" height="500px" width="400px" className='mt-6' />
                    </div>

                    <div class="image-container2">
                        <img src="./images/smiling.jpg" height="2000px" width="300px" style={{ marginTop: '650px' }} />
                    </div>
                    <br /><br /><br /><br /><br /><br />

                    <div class="image-container">
                        Welcome to charity<br />

                        <div class="content">
                            <h1>Let Us Come Together<br />
                                To Make a Difference</h1>
                            <p>Donating is a simple yet impactful way to help others in need. By giving resources, we provide relief, support vital causes, and promote empathy. Donations empower nonprofits and individuals to make a positive difference and address pressing issues. It's a collective effort that builds resilience, fosters unity, and leaves a lasting legacy of compassion in the world</p>
                        </div>

                        <div class="container">
                            <div class="abc">
                                <h5>Our Mission</h5>

                                <p>"Empowering Change, Eradicating Poverty. Together we built the bestest ever to live"</p>
                            </div>

                            <div class="abc">
                                <h5>Our Vision</h5>
                                <p> A thriving, equitable world through lasting change, compassion." </p>
                            </div>
                        </div>

                    </div>
                    <div class="image-container mt-6">
                        Donations
                        <progress class="progress is-primary" value="15" max="100">15%</progress>
                        Medical help
                        <progress class="progress is-primary" value="15" max="100">15%</progress>

                    </div>

                    <div class="image-container">
                        <br /><br />
                        Latest causes
                        <br /><br />
                        <div class="card-container" style={{ display: 'flex' }}>
                            <div class="card" style={{ width: '250px' }}>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="./images/medical.jpg" alt="Placeholder image" style={{ marginLeft:"0px" }} />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">

                                        </div>
                                        <div class="media-content">
                                            <p class="subtitle is-6">Medical</p>
                                            <p class="title is-4">Donate For Poor Peoples Treatment And Medicine</p>

                                        </div>
                                    </div>

                                    <div class="content">
                                        Give your hard earned money to help those who are sick and unable to buy medicine.
                                        <br />

                                        <div class="buttons">
                                            <button class="button is-primary" onClick={() => { navigate("/requests"); }}>Donate Now</button></div>
                                    </div>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <div class="card" style={{ width: '250px' }}>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="./images/homeless.jpg" alt="Placeholder image" style={{ marginLeft:"0px" }} />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">

                                        </div>
                                        <div class="media-content">
                                            <p class="subtitle is-6">Homeless</p>
                                            <p class="title is-4">Children We Work With</p>

                                        </div>
                                    </div>

                                    <div class="content">
                                        Help homeless Children in the country who are also differently able to lead a life enjoying as you do.
                                        <br />
                                        <br /><br />
                                        <div class="buttons">
                                            <button class="button is-primary" onClick={() => { navigate("/requests"); }}>Donate Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">

                    About us
                    <div class="content">
                        <h1>Your Support Is Really <br /> Powerfull</h1>
                        <p>The secret to happiness lies in helping others. Never
                            underestimate the difference <br />YOU can make in the
                            lives of the poor, the abused and the helpless.</p><br />

                        <div class="buttons">
                            <button class="button is-primary" onClick={() => { navigate("/about"); }}>Read More</button>
                        </div>
                    </div>


                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                    <div class="image-container3">
                        <img src="./images/2pic.jpg" height=" 500px" width="400px" />
                    </div>

                    <br /><br /><br /><br /><br /><br />

                    <div class="card-container " style={{ display: 'flex', marginTop: '50px' }}>
                        <div class="card" style={{ width: '250px' }}>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="./images/education.jpeg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">

                                    </div>
                                    <div class="media-content">
                                        <p class="subtitle is-6">Education</p>
                                        <p class="title is-4">Help For Education</p>

                                    </div>
                                </div>

                                <div class="content">
                                    help somone to enligten theeir selves with education to help their families. They are eager to learn but have lack of resources.
                                    <br />
                                    <br />
                                    <div class="buttons">
                                        <button class="button is-primary" onClick={() => { navigate("/requests"); }}>Donate Now</button></div>
                                </div>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div class="card" style={{ width: '250px' }}>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="./images/food.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">

                                    </div>
                                    <div class="media-content">
                                        <p class="subtitle is-6">Food</p>
                                        <p class="title is-4">Help For Food</p>

                                    </div>
                                </div>

                                <div class="content">
                                    Share food to feed the hunger. You've been blessed to have food while they are their dying of hunger.
                                    <br /><br /><br /><br />

                                    <div class="buttons">
                                        <button class="button is-primary" onClick={() => { navigate("/requests"); }}>Donate Now</button></div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;