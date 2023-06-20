import React  from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from './../Redux/Action/Todo';

const DisplayTodos = ({todos, deleteTodo}) => {
    
  return (
    <Container >
        <Row>
            <Col>
                <Card className='mt-3 shadow-sm'>
                    <Card.Body>
                        <h3> All todo list are here </h3>
                        <DisplayCount/>
                        <ListGroup>
                            {
                                todos.map((todo, index) =>(
                                    <ListGroup key={index}>
                                        <h4>{todo.title}</h4>
                                        <p>{todo.description}</p>
                                        <Button onClick={event=> deleteTodo(todo.id)}  className='btn btn-danger sm'>
                                            Delete 
                                        </Button>
                                    </ListGroup>
                                ))
                            }
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps=(state)=>{
    
    return {todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})


export default connect(mapStateToProps, mapDispatchToProps) (DisplayTodos)