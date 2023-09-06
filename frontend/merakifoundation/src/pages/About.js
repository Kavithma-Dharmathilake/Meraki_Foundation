import Navbar from "../common/navbar";
import { useNavigate } from "react-router-dom"

const About = () => {
    return (

        <div>
            <Navbar title="About Us" />
            <div className="columns is-mobile mt-6 is-align-content-center">

                <div className="column has-background-success-light"></div>
                <div className="column has-background-success-light">
                    _______________________Our Testimonials_______________________<br /><br /><br />
                    <h1 className="title is-3">What people say about us?</h1>
                    <p>I've been using Meraki Foundation for years, and it's transformed the way I give back to society. The platform's user-friendly interface makes donating effortless, and I love that I can choose from a wide range of causes." - John D</p>
                    <br /><br />
                </div>
                <div className="column has-background-success-light"></div>
            </div>

            <br /><br />


            <div class="columns is-mobile is-align-content-center has-background-grey has-text-white-bis">
                <div class="column is-three-fifths is-offset-one-fifth "><br /><br />
                    <h1 className="title is-3">Who are we?</h1><br />
                    <p> Introducing the first-of-its-kind donation app in Sri Lanka, our groundbreaking platform revolutionizes donation and it’s marketing
                        and amplifies the impact of societal contributions. The platform encompasses 5 different types of donations like; one-time,
                        recurring, in-kind, blood and memorial donations. As the initial stakeholders; donors, recipients and admin will be actively
                        involved in the platforms. With a strong emphasis on trustworthiness, we implement robust verification processes to ensure
                        genuine empathetic situations receive the support they deserve. Through transparency, accountability, and impact reporting,
                        donors feel connected to the causes they support, while our user-friendly app offers a comprehensive range of five donation
                        types, empowering individuals to make a meaningful difference in their preferred way. Join us in fostering a culture of giving and
                        compassion as we leverage technology to create a lasting impact on the lives of those in need
                        <br />
                        The 5 types of donation services our website serves are:  </p><br />
                    <ol>
                        <li> One-time donations:One time money or cash donations.</li>
                        <li> Recurring donations: Repeated donations (monthly, yearly)</li>
                        <li> In-Kind donations: Anything except cash (stationery, food donation)</li>
                        <li> Blood donations (Publish information related to blood donation campaigns)</li>
                        <li> Memorial donations: (Buildings, statues, hospital donations) - Marketing and communicating Corporate Social</li>
                        Responsibility Project
                    </ol>


                </div>
            </div>

            <br /><br /><br />
            <h1 className="title is-3 is-align-content-center ml-6">Articles You may read about</h1><br />
            <div className="columns is-align-content-center">

                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="images/image1.jpg" alt="image 1" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h3 class="title is-4">Article Title 1</h3>
                                <p>This is Article 1</p>
                                <a  class="button is-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="images/image2.jpeg" alt="Article 2" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h3 class="title is-4">Article Title 2</h3>
                                <p>This is Article 2.</p>
                                <a  class="button is-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="images/image3.png" alt="Article 3" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h3 class="title is-4">Article Title 3</h3>
                                <p>This is Article 3.</p>
                                <a  class="button is-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>






    );
}

export default About;