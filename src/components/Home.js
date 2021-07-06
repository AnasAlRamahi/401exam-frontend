import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkArr: []
        }
    }

    componentDidMount = async () => {
        await axios.get(`http://localhost:8000/getAll`)
            .then(response => {
                this.setState({
                    drinkArr: response.data
                })
                console.log(response.data);
            }).catch(error => console.log(error.message))
    }

    addToFav = async (item) => {
        const reqBody = {
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            idDrink: item.idDrink
        }
        await axios.post(`http://localhost:8000/addFav`, reqBody)
    }


    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <h3 style={{ textAlign: "left", marginLeft: "20px" }}>Home</h3>
                <Row xs={1} md={3} className="g-4" >
                    {
                        this.state.drinkArr.map(item => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem', marginBottom: "30px" }}>
                                        <Card.Img variant="top" src={item.strDrinkThumb} />
                                        <Card.Body>
                                            <Card.Title>{item.strDrink}</Card.Title>
                                            <Button variant="primary" onClick={() => this.addToFav(item)}>Add to favorite</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>
            </div>

        )
    }
}

export default Home
