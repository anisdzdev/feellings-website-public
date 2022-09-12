import React from 'react';
import MapCard from "./MapCard";
import {Col, Container, Row} from "reactstrap";

function Roadmap() {
    return (
        <div className="roadmap" id="mindmap-section">
            <img className="cloud-right" alt="" src={require('../../assets/images/cloud-mindmap-right.svg').default}/>
            <img className="cloud-left" alt="" src={require('../../assets/images/cloud-mindmap-left.svg').default}/>
            <div className="face face-4">
                <img className="face-image" alt="" src={require('../../assets/images/face4.png')}/>
            </div>
            <Container>
                <Row>
                    <Col className="mindmap-full">
                        <MapCard
                            image={require('../../assets/images/mindmap-future-image.png')}
                            image_position="left"
                            title="Mindmap">
                            <div className="face face-3">
                                <img className="face-image" alt="" src={require('../../assets/images/face3.png')}/>
                            </div>
                            We plan to continue to develop the Feellings world and grow our wonderful community. We also
                            have utility planned to help serve our overall mission, assisting people with their mental
                            well-being. These plans include...
                        </MapCard>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mindmap-col">
                        <MapCard title="Mental Well-Being">Access to talks & events held by professionals in our
                            Discord, focused on different aspects of mental health. Regular meditation sessions to help
                            you take a break from the fast-paced NFT world.</MapCard>
                        <MapCard title="Charity Donations">
                            We plan to continuously donate to researched mental health charities. These charities will
                            be recommended & voted for by Feellings holders monthly.<br/><br/>10% of Mint will initially fund
                            the Feellings Charity Wallet (on sell out).
                        </MapCard>
                        <MapCard title="Creative Collaboration">
                            We want to encourage creativity within our community as much as possible. Sharing the
                            Feellings world and the growth of it is something we want the entire community to be
                            involved in.
                            <br/><br/>
                            We will strive to encourage creativity and growth for the entire community to be involved
                            in. We will be on the lookout on a regular basis for artists within our community to
                            collaborate on pieces that will compliment and strengthen our project.
                            <br/><br/>
                            These pieces will be used for: Charity auctions, airdrops and unique 1/1 collections.
                        </MapCard>
                    </Col>
                    <Col md={6} className="mindmap-col">
                        <MapCard title="Friends of Feellings">A monthly event showcasing a project we love that shares
                            our values. Including a variety of competitions, creating collaborative art pieces and
                            giving away NFTs from the project to our holders.</MapCard>
                        <MapCard title="Community Wallet">The Feellings world is only just beginning and we couldn't be
                            more excited to build it with you all!<br/><br/>The Community Wallet will fund:<br/>-
                            Community events<br/>- Giveaways<br/>- Further developing the Feellings world & brand<br/>-
                            Expanding Holder utility<br/><br/>35% of Mint will initially fund the Feellings Community Wallet
                            (on sell out).</MapCard>
                        <MapCard title="Merch">Expanding the Feellings to the real world! We plan to create a growing
                            collection of limited fashion drops exclusive to holders.<br/><br/>Tyler (Artist) and Josh
                            (Dev) are experienced in clothing design, marketing and distribution and have already
                            started working on ideas for our first collection. We plan to treat this as a fashion
                            brand, not just a merch store.</MapCard>
                    </Col>
                </Row>
                <Row>
                    <Col className="mindmap-full">
                        <MapCard
                            image={require('../../assets/images/mindmap-lead-image.png')}
                            image_position="right"
                            title="The Future...">
                            We have many more plans and ideas regarding everything mentioned above. However, a lot of
                            these plans are incredibly ambitious and we believe it wouldn't be right to release them
                            prematurely.<br/><br/>Like every aspect of this project, we are taking our time to ensure
                            everything is perfect.<br/><br/>We're very excited to make these ideas a reality and can't
                            wait share them with you all! This is just the beginning...
                        </MapCard>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Roadmap