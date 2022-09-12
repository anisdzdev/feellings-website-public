import React from 'react';
function AboutUs() {

    return (
        <div id="about-us-section" className="col col-mid-12">
            <div className="face face-2">
                <img className="face-image" alt="" src={require('../../assets/images/face2.png')}/>
            </div>
            <img className="cloud-top remove-margin" alt=""
                 src={require('../../assets/images/cloud-about-us-top.svg').default}/>
            <div id="about-us-cloud" className="remove-margin">
                <div id="about-us-text-div">
                    <h2 id="about-us-title">About Us</h2>
                    <p id="about-us-description">
                        Feellings is an NFT collection of 4444 little buds, with a primary focus on
                        helping people with their mental well-being. Whether this be through direct
                        human connections, donations to mental health charities, exciting community
                        events, or simply seeing a fun little character that brightens your day.
                        Drawn in a minimalist, vibrant style, each Feelling is generated from a
                        number traits with varying rarities. There’s a Feelling for everyone!
                    </p>
                </div>
            </div>
            <img className="cloud-top remove-margin" alt=""
                 src={require('../../assets/images/cloud-about-us-bottom.svg').default}/>
        </div>
    );
}

export default AboutUs