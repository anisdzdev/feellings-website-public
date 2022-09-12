import React from 'react';
import {Col, Row} from "reactstrap";

function MapCard({title, image, image_position, children}) {

    return (
        <div className="card secondary-bg">
            <Row className="map-card-reverse">
            {image && image_position === 'left' ?
                <Col md={6}>
                    <img className="mindmap-image" src={image} alt="image"/>
                </Col>
                : null
            }
            <Col md={image ? 6 : 12} className="card-content">
                <h1>{title}</h1>
                <p>{children}</p>
            </Col>
            {image && image_position === 'right' ?
                <Col md={6}>
                    <img className="mindmap-image" src={image} alt="image"/>
                </Col>
                : null
            }
            </Row>
        </div>
    );
}

export default MapCard;