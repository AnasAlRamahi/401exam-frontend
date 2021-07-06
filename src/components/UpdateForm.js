import React, { Component } from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Drink:</Modal.Title>
                    </Modal.Header>
                    <Container>
                        <Form onSubmit={(e) => this.props.handleUpdate(e, this.props.item)}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.item.strDrink} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.item.strDrinkThumb} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update!
                            </Button>
                        </Form>
                    </Container>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
