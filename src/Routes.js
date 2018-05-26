import React from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import logo from './logo.png';

const Routes = () => (
  <div>
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" style={{ margin: 'auto', display: 'block' }}/>
                <h1 className="App-title" style={{ textAlign: 'center' }}>My To-Unalive List</h1>
            </div>
        </header>
        <div style={{marginTop: '100px',marginLeft: '800px'}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </div>
  </div>
);

export default Routes;