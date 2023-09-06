import Navbar from "../common/navbar";
import { useNavigate, Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";



const Campaign = () => {

    const navigate = useNavigate();
    const { id } = useParams(); // Get the requestId from the URL

    const [request, setRequest] = useState(null);

    useEffect(() => {
        // Fetch the request details based on the requestId
        const fetchRequestDetails = async () => {
            const response = await fetch(`/api/donreq/${id}`);
            const json = await response.json();
            console.log(id);

            if (response.ok) {
                setRequest(json);
            }
        };

        fetchRequestDetails();
    }, [id]); // Include requestId in the dependency array

    if (!request) {
        return null; // or display a loading indicator
    }

    console.log((request.amountReceived / request.amountRequired) * 100)
    return (

        <div>
            {/* Display the request details */}
            <Navbar title={request.title} />
            <div class="content is-medium mt-6" style={{ marginLeft: '300px', marginRight:'200px' }}>

                <p>{request.Description}</p>
                <h2>Why Donate? The Power of Your Contribution</h2>
                <p> At the heart of every donation campaign lies the incredible potential to create meaningful change, uplift lives, and bring about a brighter future. Your decision to donate isn't just an act of kindness; it's a catalyst for transformation. Here's why your contribution matters</p>
                <ul>
                    <li><b>Changing Lives</b>: Your donation has the power to touch lives in profound ways. <br/>It provides hope and relief to those facing adversity, helping them regain their footing and rebuild.</li>
                    <br /><li><b>Making a Difference</b>: Collectively, the contributions of generous donors like you have the potential to drive substantial change. <br/>Your support fuels initiatives that address critical issues, from healthcare and education to poverty alleviation and disaster relief.</li>
                    <br /><li> <b>Empowering Communities</b>: Donations aren't just about charity; they're about empowerment. <br/>Your contribution can empower individuals and communities to take control of their destinies, fostering self-reliance and sustainability.</li>
                    <br /><li><b>Creating Opportunities</b>: By donating, you're opening doors to opportunities that would otherwise remain out of reach.<br/> Whether it's a child's education, a family's access to clean water, or an entrepreneur's chance to thrive, your support paves the way for brighter tomorrows..</li>
                    <br /> <li><b>Global Impact</b>: Donation campaigns have the power to transcend borders and impact people worldwide. <br/>Your generosity isn't limited by geography; it has a global reach, touching lives in far-reaching corners of the world</li>
                </ul>
                <h2>How Your Donation Helps</h2>
                <p> At the heart of every donation campaign lies the incredible potential to create meaningful change, uplift lives, and bring about a brighter future. Your decision to donate isn't just an act of kindness; it's a catalyst for transformation. Here's why your contribution matters</p>
                <ul>
                    <li>Emergency Relief: In times of crisis, your donation can provide immediate relief to disaster-stricken communities, offering shelter, food, and medical aid to those in need.</li>
                    
                </ul>
<br />
                <h4>Donate today and be the difference-maker the world needs. Your contribution is more than a gift; it's a promise of a brighter tomorrow for all.</h4>

                <h2>Contact Members</h2>
                <p>{request.contactDetails} </p>
                <div className="columns is-mobile">
                <div className="column"><img src="/images/donreq.jpg" alt="Photo 1" style={{height:"200px", width:"300px"}} /></div>
                <div className="column"><img src="/images/homeless.jpg" alt="Photo 1" style={{height:"200px", width:"300px"}} /></div>
                <div className="column"><img src="/images/education.jpeg" alt="Photo 1" style={{height:"200px", width:"300px"}} /></div>
                <div className="column"><img src="/images/medical.jpg" alt="Photo 1" style={{height:"200px", width:"300px"}} /></div>
               </div>
                <div className="columns is-mobile">
                <div className="column"><img src="/images/campaign1.jpg" alt="Photo 1" style={{height:"300px", width:"400px"}}/></div>
                <div className="column"><img src="/images/campaign2.jpg" alt="Photo 1" style={{height:"300px", width:"400px"}}/></div>
                <div className="column"><img src="/images/campaign3.jpg" alt="Photo 1" style={{height:"300px", width:"400px"}} /></div>
                <div className="column"><img src="/images/campaign4.jpg" alt="Photo 1"style={{height:"300px", width:"400px"}} /></div>
               </div>

                <h2>Donation Received</h2>
                <div class="columns">
                    <div class="column is-half">
                        Rs. {request.amountReceived} / {request.amountRequired}
                        <progress class="progress is-success mt-6" value={(parseFloat(request.amountReceived) / parseFloat(request.amountRequired)) * 100}

                            max={100}></progress>

                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
                <div className="content" onClick={() => { navigate("/payments"); }}>

                    <button class="button is-success mt-6 is-medium" >Donate</button>
                </div>

            </div>



        </div>
    );
}

export default Campaign;