import React from 'react';

export default function TopClouds () {
    return (
        <>
            <img className="cloud-top-right" alt="" src={require('../../assets/images/cloud-top-right.svg').default}/>
            <img className="cloud-top-left" alt="" src={require('../../assets/images/cloud-top-left.svg').default}/>
        </>
    )
}