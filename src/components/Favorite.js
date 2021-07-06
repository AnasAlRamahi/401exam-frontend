import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import UpdateForm from './UpdateForm'

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDrinks: [],
            show: false,
            id: -1,
        }
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }
    handleShow = (e, item) => {
        this.setState({
            show: true,
            id: item.idDrink
        })
    }

    componentDidMount = async () => {
        await axios.get(`http://localhost:8000/getFav`)
            .then(response => {
                this.setState({
                    favDrinks: response.data,
                })
            }).catch(error => {
                console.log(error.message);
            })
    }

    deleteFav = async (e, item) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8000/deleteFav?idDrink=${item.idDrink}`)
            .then(response => {
                this.setState({
                    favDrinks: response.data,
                })
                console.log(response.data)
            }).catch(error => {
                console.log(error.message);
            })
    }

    handleUpdate = async (e, item) => {
        e.preventDefault();
        const reqBody = {
            strDrink: e.target.title.value,
            strDrinkThumb: e.target.image.value,
            idDrink: this.state.id
        }
        await axios.put(`http://localhost:8000/updateFav`, reqBody)
            .then(response => {
                this.setState({
                    favDrinks: response.data,
                })
            })
            .catch(error => {
                console.log(error.message);
            })
        this.handleClose();
    }



    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <h3 style={{ textAlign: "left", marginLeft: "20px" }}>Favorites</h3>
                <Row xs={1} md={3} className="g-4" >
                    {
                        this.state.favDrinks.map(item => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.strDrinkThumb} />
                                        <Card.Body>
                                            <Card.Title>{item.strDrink}</Card.Title>
                                            <Button variant="primary" onClick={(e) => this.handleShow(e, item)}>Update</Button>
                                            <Button variant="primary" onClick={(e) => this.deleteFav(e, item)}>Delete</Button>
                                        </Card.Body>
                                        <UpdateForm
                                            item={item}
                                            show={this.state.show}
                                            handleClose={this.handleClose}
                                            handleUpdate={this.handleUpdate}
                                        />
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

export default Favorite
