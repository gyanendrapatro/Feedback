import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, Row} from "react-bootstrap";
import bicycleImg from './rec/yoga.jpg'
import {setSport} from "./store/actions";
import {connect} from "react-redux";

const cards = [
    {
        title: "Yoga",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: bicycleImg
    }
]

const Sports = ({setSport}) => {
    return (
        <div className="container py-1">
            <Row>
                {cards.map((card, index) => (<div key={index} className="col-md-4 p-2">
                    <Card>
                        <Card.Header>
                            {card.title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Img src={card.image} alt={card.title}/>
                            <Card.Text>
                                {card.text}
                            </Card.Text>

                            <Link to="/events" onClick={() => setSport(card.title)}>
                                <Button style={{marginRight: 20}}
                                        variant="primary">Events</Button>
                            </Link>
                            <Link to="/lessons">
                                <Button
                                    variant="primary">Learn</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setSport: (sport) => dispatch(setSport(sport))
})

export default connect(null, mapDispatchToProps)(Sports);