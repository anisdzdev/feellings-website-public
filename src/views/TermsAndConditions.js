import React from 'react';
import TopClouds from "../components/header/TopClouds";
import Footer from "../components/footer/Footer";
import Terms from "../components/terms/Terms";

function TermsAndConditions() {

    return (
        <>
            <TopClouds/>
            <Terms/>
            <Footer fromTAC={true}/>
        </>
    );
}

export default TermsAndConditions