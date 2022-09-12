import {Row, Col} from "reactstrap";

//Team images
import tyler from "../../assets/images/Feellings-Tyler-Profile-Picture.png";
import jack from "../../assets/images/Feellings-Jack-Profile-Picture.png";
import sam from "../../assets/images/Feellings-Sboi-Profile-Picture.png";
import josh from "../../assets/images/Feellings-Josh-Profile-Picture.png";
import React from "react";

function Team() {

    const openPage = (url)=> {
        window.open(url, '_blank').focus();
    }

    return (
        <div className="team-section-container">
            <div className="face face-5">
                <img className="face-image" alt="" src={require('../../assets/images/face5.png')}/>
            </div>
            <img className="cloud-top" style={{width: '100%'}} alt=""
                 src={require('../../assets/images/cloud-about-us-top.svg').default}/>
            <div className="team-section" id="teams-section">
                <div className="team">
                    <h1 id="team-title">Meet the Team</h1>
                    <Row className="justify-content-sm-center">
                        <Col lg="3" md="6">
                            <div className="team-col">
                                <img src={tyler} alt="image of tyler" className="team-img"/>
                                <div className="team-txt">
                                    <h2>Tyler</h2>
                                    <h3 className="tyler">ARTIST & MARKETING</h3>
                                    <p>
                                        Hey, I’m Tyler… a designer with 5+ years experience in branding design,
                                        illustration & marketing.
                                    </p>
                                    <p>
                                        Having ventured into the freelance world over the past
                                        year, the discovery of web3 has given me an opportunity to achieve what my
                                        younger self could have only dreamt of… A collection of cute little characters
                                        with a mission for greater good and tight knit, loving community? Yes.
                                    </p>
                                </div>
                                <div className="team-socials">
                                    <svg onClick={() => openPage('https://twitter.com/foxrockett')} width="35" height="30" version="1.1"><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 5 24 15"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#fff"></path></svg></g></svg>
                                    <svg onClick={() => openPage('https://www.instagram.com/foxrockettstudio/')} width="30" height="30" version="1.1"><g id="SvgjsG1013"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="#fff" d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"></path></svg></g></svg>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="team-col">
                                <img src={jack} alt="image of jack" className="team-img"/>{" "}
                                <div className="team-txt">
                                    <h2>Jack</h2>
                                    <h3 className="jack">COMMUNITY MANAGER</h3>
                                    <p>
                                        Lover of NFTs, Art, Cups of Tea, Gaming and Music. Hellbent on creating a strong
                                        community and brand that helps people across the world.
                                    </p>
                                    <p>
                                        The amount of love and creativity in the Web3/NFT space is inspiring and is one
                                        of the many reasons I am proud to be a part of it.
                                    </p>
                                </div>
                                <div className="team-socials">
                                    <svg onClick={() => openPage('https://twitter.com/Feellings_Jack')} width="35" height="30" version="1.1"><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 5 24 15"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#fff"></path></svg></g></svg>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="team-col">
                                <img src={sam} alt="image of sam" className="team-img"/>{" "}
                                <div className="team-txt">
                                    <h2>Sam</h2>
                                    <h3 className="sam">OPERATIONS MANAGER</h3>
                                    <p>
                                        Inspired by the potential of Web3 and the positive impact it can & will have on
                                        people's lives.
                                    </p>
                                    <p>
                                        In my day to day work I frequently talk with people who struggle with mental
                                        health challenges. Feellings is an extension of my efforts to create an
                                        environment where everyone has a place they feel welcome.
                                    </p>
                                </div>
                                <div className="team-socials">
                                    <svg onClick={() => openPage('https://twitter.com/Feellings_Sboi')} width="35" height="30" version="1.1"><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 5 24 15"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#fff"></path></svg></g></svg>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="team-col">
                                <img src={josh} alt="image of josh" className="team-img"/>{" "}
                                <div className="team-txt">
                                    <h2>Josh</h2>
                                    <h3 className="josh">DEVELOPER</h3>
                                    <p>
                                        NFT Enthusiast, Crypto Nerd, experienced in Computer Science with a passion for
                                        making cool stuff. Leaping from Web2 to Web3 without taking one look back.
                                    </p>
                                    <p>
                                        So far I've met so many people both outside & within the Feellings community and
                                        I can't wait to continue making these connections in this space.
                                    </p>
                                </div>
                                <div className="team-socials">
                                    <svg onClick={() => openPage('https://twitter.com/hillj_99')} width="35" height="30" version="1.1"><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 5 24 15"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#fff"></path></svg></g></svg>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Team;
