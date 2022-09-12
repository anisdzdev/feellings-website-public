import React from 'react';
import {Container} from "reactstrap";
import {useEffect, useState} from "react";

function Faqs() {
    const [buttonText, setButtonText] = useState("MINT NOW");
    const [buttonShake, setButtonShake] = useState(false);

    const questions = [
        {question: 'Supply & mint price?', answer: "Supply: 4444\nMint Price: 0.05 ETH"},
        {question: 'Allowlist?', answer: "Allowlist spots have been given out to the Feellings Community through Giveaways, Community Collaborations & Games held in our Discord. We really focused on the Allowlist distribution being responsible leading up to the mint date.\n\n" +
                "We will continue to hold these events for our community as it's been something we've really enjoyed doing, only the prizes will be different this time... keep in touch with us through our Twitter & Discord to find out what they are."},
        {question: 'When will Feellings launch?', answer: "Allowlist Sale: Friday, July 8th | 2PM UTC\nPublic Sale: Sunday, July 10th | 2PM UTC"},
        {question: 'Utility?', answer: "Holding a Feellings NFT will be your way to have access to our close-knit community with holder exclusive events & giveaways, voting rights in charity events, donations & much more… "},
        {question: 'Who are the Founders?', answer: "The Founders are 4 friends who have known each-other since High School. We’ve always been interested in the digital world, from the early days of social media, to now finding ourselves immersed in web3 combining our skills & passion for Design, Community & People."},
    ]

    useEffect(() => {
        let question = document.querySelectorAll(".question");

        question.forEach(question => {
            question.addEventListener("click", () => {
                const active = document.querySelector(".question.active");
                if(active && active !== question ) {
                    active.classList.toggle("active");
                    active.parentElement.style.borderRadius = '50px';
                    active.nextElementSibling.style.maxHeight = 0;
                }
                question.classList.toggle("active");
                const answer = question.nextElementSibling;
                if(question.classList.contains("active")){
                    question.parentElement.style.borderRadius = '25px';
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    question.parentElement.style.borderRadius = '50px';
                    answer.style.maxHeight = 0;
                }
            })
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const openPage = (url) => {
        window.open(url, '_blank').focus();
    }

    const renderQuestions = () => {
        return questions.map((q, i) => {
            return <div key={i}>
                <div className="container">
                    <div className="question">
                        {q.question}
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            {q.answer}
                            {q.link && <><br/><br/> <a href={q.link.url}>{q.link.text}</a></>}
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <Container className="faqs" id="faqs-section">
            <h1 className="title">FAQS</h1>
            {renderQuestions()}
            <div id="header-center-btn">
                <button className={buttonShake? "header-mint-now-btn smaller mt-5 shake-slow" : "header-mint-now-btn smaller mt-5"} onClick={() => openPage("https://opensea.io/collection/feellingsnft")}>View on OpenSea</button>
            </div>
        </Container>
    );
}

export default Faqs