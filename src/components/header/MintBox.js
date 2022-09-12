import React, { useState, useCallback, useEffect } from 'react';
import { useEthers } from "@usedapp/core";
import { Card, Col, Container, Row } from "reactstrap";
import { useMint } from "../../utils/useMint";
import { ToastContainer, toast } from "react-toastify";
import { utils } from "ethers";
import "react-toastify/dist/ReactToastify.css";
import {useMintPrice} from "../../utils/getMintPrice";
import {useMaxMintAmountPerTx} from "../../utils/maxMintAmountPerTx";
import useIsAnySaleActive from "../../utils/getIsAnySaleActive";
import {useIsWLSale} from "../../utils/getIsWLSale";
import {useWhitelistMint} from "../../utils/useWhitelistMint";
import getWhitelistProof from "../../utils/getWhitelistProof";


function MintBox() {
    const { activateBrowserWallet, account, library } = useEthers();
    const { state: mintState, send: mint } = useMint();
    const { state: wlMintState, send: wlMint } = useWhitelistMint();

    const isWLSaleActive = useIsWLSale();

    const MINT_PRICE = useMintPrice();
    const TOKEN_RATE = MINT_PRICE ? utils.formatEther(String(MINT_PRICE)) : 0;
    const MAX_QUANTITY = useMaxMintAmountPerTx();

    const [quantity, setQuantity] = useState(1);

    const handleAdd = useCallback(() => {
        if (quantity >= 0 && quantity < MAX_QUANTITY) {
            setQuantity(quantity + 1);
        }
    }, [quantity, MAX_QUANTITY]);

    const handleSubtract = useCallback(() => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }, [quantity, MAX_QUANTITY]);

    const handleConnect = useCallback(() => {
        if (!account) {
            activateBrowserWallet()
                .catch(() => toast(" 🦊 MetaMask Wallet not Connect!"));
        }
    }, [activateBrowserWallet, account]);

    const handleMint = useCallback(async () => {
        const value = utils.parseUnits(String(TOKEN_RATE * quantity));
        if (account && value) {
            if(isWLSaleActive){
                const proof = await getWhitelistProof(library, account);
                if(proof === 0) return toast(" 🦊 You are not whitelisted!");
                wlMint(quantity, proof, {value})
            } else {
                mint(quantity, { value });
            }
        } else {
            toast("Oops Try Again!");
        }
    }, [quantity, account, mint]);

    useEffect(() => {
        toast(mintState.errorMessage);
        if (mintState.status === 'Success') {
            toast("Successfully minted " + quantity + " Feellings")
        }
    }, [mintState])

    useEffect(() => {
        toast(wlMintState.errorMessage);
        if (wlMintState.status === 'Success') {
            toast("Successfully minted " + quantity + " Feellings")
        }
    }, [wlMintState])

    return (
        <Container style={{ maxWidth: '800px' }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Card className="mint-card">
                <Row className="mint-box-row">
                    <Col md={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="mint-amount-content">QTY: {quantity} / PRICE: {(quantity * TOKEN_RATE).toFixed(2)}ETH</div>
                        <div className="mint-amount-btn noselect" onClick={handleSubtract}>-</div>
                        <div className="mint-amount-btn mint-amount-btn-plus noselect" onClick={handleAdd}>+</div>
                    </Col>
                </Row>
                <Row>
                    {account ?
                        <button className="header-mint-now-btn mint-popup-button" onClick={handleMint}>MINT NOW</button>
                        : <button className="header-mint-now-btn mint-popup-button" onClick={handleConnect}>CONNECT WALLET</button>}
                </Row>
            </Card>
        </Container>
    )
}

export default MintBox;