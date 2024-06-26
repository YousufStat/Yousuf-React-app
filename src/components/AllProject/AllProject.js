import React, { Component,Fragment } from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ImageN from '../../asset/image/cvpage.jpg'


// Portfolio and Project are same page
export default class AllProject extends Component {
    constructor(){
        super();
        this.state={
            projectNew:[ImageN]
        }
    }
   
    render() {
        return (
            <Fragment>
            <Container className="text-center mt-5">
        
                <Row>
                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top" src={this.state.projectNew}/>
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top"  src={this.state.projectNew} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top"  src={this.state.projectNew} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top"  src={this.state.projectNew} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top"  src={this.state.projectNew} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                            <Card.Img variant="top"  src={this.state.projectNew} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}
