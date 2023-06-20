import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCount = ({todos}) => {
  return (
    <Card>
        <Card.Body>
            <h4>Number of todo: {todos.length}</h4>
        </Card.Body>
    </Card>
  )
}
const mapStateToProps=(state)=>({todos:state.todos})

const mapDispatchToProps=(distatch) =>({})


export default connect( mapStateToProps, mapDispatchToProps) (DisplayCount)