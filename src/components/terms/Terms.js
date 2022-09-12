import React from 'react';
import {Container} from "reactstrap";
import {Icon} from '@iconify/react';
import {useNavigate} from "react-router-dom";

function Terms() {
    let navigate = useNavigate();

    return (
        <div className="position-relative">
            <span onClick={() => navigate("/")} className="back-btn"><Icon icon="typcn:arrow-back" height="35"
                                                                           className="mb-2"/> Back</span>
            <img className="cloud-right" style={{bottom: '350px', top: 'auto'}} alt=""
                 src={require('../../assets/images/cloud-mindmap-right.svg').default}/>
            <img className="cloud-left" style={{top: '350px'}} alt=""
                 src={require('../../assets/images/cloud-mindmap-left.svg').default}/>
            <div className="face face-5">
                <img className="face-image" alt="" src={require('../../assets/images/face4.png')}/>
            </div>

            <div className="face face-4">
                <img className="face-image" alt="" src={require('../../assets/images/face2.png')}/>
            </div>
            <Container className="terms-conditions">
                <h1>TERMS & CONDITIONS</h1>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally
                    or on behalf of an entity and Feellings (“Feellings,” “we,” “us,” or “our”).
                </p>
                <h2>1. ACCEPTANCE OF TERMS</h2>
                <p>
                    Feellings provides its services (described below) to you, the Collector, through its website and
                    application program interface located at feellings.xyz (the “Website”), subject to the following
                    Terms of Service (the “Terms”). By using or accessing the Website, you acknowledge that you have
                    read and agree to these Terms.
                </p>
                <p>
                    Feellings may change or amend these Terms at any time at its sole and absolute discretion. We
                    encourage you to review these Terms and to check periodically for any updates or changes.
                </p>
                <h2>2. DESCRIPTION OF SERVICES</h2>
                <p>
                    Feellings is a collection of non-fungible tokens (“NFTs”) stored on the Ethereum blockchain.
                </p>
                <h2>3. TERMS OF SALE</h2>
                <p>
                    Feellings sells character art authenticated as NFTs. In exchange for payment, the Collector is
                    granted an NFT. The purchase of the NFT does not grant any profit-sharing interest or equity in
                    Feellings, ownership of intellectual property, or any other rights.
                </p>
                <h2>4. PAYMENT</h2>
                <p>
                    Collector must link a Web3 Wallet (MetaMask, Fortmatic, WalletConnect) to the Website and use
                    Ethereum (ETH) cryptocurrency from your Web3 Wallet to complete your purchase.
                </p>
                <p>
                    Feellings will have no insight into or control over these payments or transactions, nor do we have
                    the ability to reverse any transactions. With this in mind, Feellings will have no liability to you
                    or to any third party for any claims or damages that may arise as a result of any transactions that
                    you engage in via the Website, or using the smart contracts, or any other transactions that you
                    conduct via the Ethereum network or a Web3 Wallet.
                </p>
                <p>
                    Collector is responsible for any sales, use, value-added or other governmental taxes, fees or duties
                    due with respect to your order.
                </p>
                <p>
                    Collector represents and warrants that any purchase of an NFT by you is solely for your personal
                    collection, use and enjoyment, and not for speculative or investment purposes, or for use as a
                    substitute for currency or other medium of exchange.
                </p>
                <h2>5. OWNERSHIP</h2>
                <p>
                    Feellings owns the name and mark and other intellectual property and proprietary technologies that
                    constitute the brand image by which Feellings is known to the public. Intellectual property and
                    proprietary technologies owned by Feellings, include, but are not limited to: Feellings smart
                    contracts, logos, trademarks, product names, service marks, and copyrightable works, including but
                    not limited to content of its internet sites, user interface, and metadata as it relates to
                    Feellings.
                </p>
                <p>
                    You acknowledge and agree that NFTs and our Website utilise new types of technology (smart
                    contracts, blockchain & decentralised networks) and as such, purchase of NFTs are subject to various
                    risks. You should be aware of and accept these risks before you purchase our NFTs. These risks
                    include & are not limited to:
                    <ul>
                        <li>The volatile nature of digital assets, which means price can greatly fluctuate in a short
                            period of time.
                        </li>
                        <li>Transactions involving NFTs may be irreversible, including accidental and/or fraudulent
                            transactions.
                        </li>
                        <li>Your ownership relies on your maintaining control of the private key(s) related to your
                            digital wallet.
                        </li>
                    </ul>
                </p>
                <p>
                    By using our Website you accept the risks involved in any transaction involving Digital Assets &
                    NFTs.
                </p>
                <h2>6. RIGHT TO PERSONAL USE</h2>
                <p>
                    Feellings grants to the Collector a worldwide non-exclusive, assignable, perpetual, and royalty-free
                    license to display the NFT solely for non-commercial purposes, given that such display right may
                    only be assigned to a subsequent Collector of the NFT simultaneously with the transfer of ownership
                    of the NFT and this Agreement.
                </p>
                <h2>7. DERIVATIVE RIGHTS</h2>
                <p>
                    Feellings grants to the Collector full commercial license to use the underlying artwork in the
                    purchased Feellings NFT for creating derivative works. This permits the Collector to produce
                    commercial products, but not to use the “Feellings” name or logo in relation to that product.
                    Collector may identify commercial products with the Feellings token ID to signify ownership of the
                    purchased NFT. The Derivative Rights are effective so long as the Collector owns that same purchased
                    Feellings NFT at the time of the derivative’s creation. A subsequent Collector is not entitled to
                    ownership of derivatives produced by a previous Collector.
                </p>
                <h2>8. RESTRICTIONS</h2>
                <p>
                    The Collector agrees to not use the purchased Feellings NFT in a derivative work that depicts or
                    encourages illegal acts, or involves pornography, racism, obscenity, violence, libel, or slander.
                </p>
                <h2>9. RESALE</h2>
                <p>
                    By purchasing a Feellings NFT, the Collector acknowledges and agrees that these Terms are binding on
                    subsequent Feellings NFT collectors and any succeeding collectors, causing all collectors of the
                    purchased Feellings NFT to be subject to these Terms.
                </p>
                <h2>10. RULES OF CONDUCT</h2>
                <p>
                    As apart of using the Feellings website, Collector agrees to not:
                    <ul>
                        <li>Modify, translate, reverse engineer, decompile, disassemble or create derivative works based
                            on any software created by Feellings.
                        </li>
                        <li>Hack, crack, phish, SQL inject, or otherwise threaten or actually harm the security of our
                            systems or those of other collectors.
                        </li>
                        <li>Infringe on the intellectual property rights of Feellings and its artists.</li>
                        <li>Do anything that infringes on the rights of Feellings or a third party.</li>
                    </ul>
                </p>
                <h2>11. ASSUMPTION OF RISK</h2>
                <p>
                    Website transactions, including but not limited to primary sales, secondary market sales, listings,
                    offers, bids, acceptances, and other operations utilize experimental smart contract and blockchain
                    technology, including NFTs, cryptocurrencies, consensus algorithms, and decentralized or
                    peer-to-peer networks and systems. Collector acknowledges and agrees that such technologies are
                    experimental, speculative, and inherently risky and may be subject to bugs, malfunctions, timing
                    errors, hacking and theft, or changes to the protocol rules of the Ethereum blockchain (i.e.,
                    “forks”) which can adversely affect the smart contracts and may expose you to a risk of total loss,
                    forfeiture of your cryptocurrency or NFT, or lost opportunities to buy or sell NFTs.
                </p>
                <h2>12. DISCLAIMER OF WARRANTIES</h2>
                <p>
                    This website and its contents are provided “as is” and “as available” without warranty of any kind,
                    either expressed or implied. By using this website, collector accepts sole responsibility for any
                    and all transaction involved Feellings NFT collectibles.
                </p>
                <h2>13. LIMITATION OF LIABILITY</h2>
                <p>
                    Collector agrees to hold us, our affiliated and related companies, and each of their respective
                    directors, shareholders, officers, employees, contractors, representatives, licensees and assigns,
                    harmless from any losses, damages, claims, costs and expenses you may incur as a consequence of
                    minting (or attempting to mint) your NFT.
                </p>
                <h2>14. PRIVACY</h2>
                <p>
                    Feellings will not collect any cookies, IP addresses, or Collector data in connection with your use
                    of the Website. This is subject to change. Collector understands that Feellings may work with
                    third-party applications that collect data, such as Discord, Collab.Land, or MetaLink for NFT holder
                    verifications or giveaways. Additionally, Collector understands that the Ethereum network is a
                    public blockchain and all of your transaction history initiated through the Website will be made
                    public.
                </p>
                <h2>15. SEVERABILITY</h2>
                <p>
                    If any provision hereof is held invalid or unenforceable by a court of competent jurisdiction, such
                    invalidity shall not affect the validity or operation of any other provision and such invalid
                    provision shall be deemed to be severed from the Terms.
                </p>
                <h2>16. GOVERNING LAW</h2>
                <p>
                    These Terms will be governed exclusively by the laws of England and Wales without regard to its
                    conflicts of laws provisions that would cause the application of the laws of any other jurisdiction.
                    Any dispute between Feellings and Collector that is not subject to arbitration will be resolved in
                    courts located in England and Wales. Collector understands and agrees that your use of the Website
                    as contemplated by these Terms shall be deemed to have occurred in England and Wales. Collector
                    consents to the jurisdiction of such courts, agrees to accept service of process by mail, and waives
                    any jurisdictional or venue defences otherwise available.
                </p>
            </Container>
        </div>

    )
}

export default Terms;