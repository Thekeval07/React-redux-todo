
import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './Components/AddTodo';
import DisplayTodos from './Components/DisplayTodos';
import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  return (
    <Provider store={store}>
      <Container className='py-3'>
        <AddTodo />
        <DisplayTodos />  
      </Container>
    </Provider>
  );
}

export default App;
