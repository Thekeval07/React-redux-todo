import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import addTodo from '../Redux/Action/Todo.js';
import {connect} from 'react-redux'
import { v4 } from 'uuid'

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState({ title: "", description: "",id:"" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // add todo in store
        addTodo({ ...todo, id: v4() });  
        console.log(todo);
        setTodo({ title:'', description:''})
    };

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add Todo Here !!!</h3>
                            <DisplayCount/>
                            {/* Form  */}
                            <Form onSubmit={handleSubmit}>
                                {/* Title */}
                                <Form.Group>
                                    <Form.Label>Todo Title:</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter Here'
                                        value={todo.title}
                                        required
                                        onChange={event => setTodo({ ...todo, title: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className='mt-3'>
                                    <Form.Label>Todo Description:</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        type='text'
                                        placeholder='Enter Here'
                                        value={todo.description}
                                        required
                                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                                    />
                                </Form.Group>
                                <Container className='center mt-3'>
                                    <Button type='submit' className='primary'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
const mapStateToProps= (state) =>({})
const mapDispatchToProps = (dispatch) =>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
