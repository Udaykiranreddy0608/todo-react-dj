import React, { Component } from "react";
import './App.css';
import Modal from "./components/Modal";
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      todolist: []
    }

  }

  refreshList = () =>{
    axios.get("/api/todos/")
    .then((res) => { this.setState({ todolist: res.data})})
    .catch(err => console.log(err))
  }
  renderTabList = ()  =>{
    return(

      <div>
        renderTabList
      </div>
    )
  }

  renderItemList = () =>{
    
    const todolist = this.state.todolist;
    return todolist.map( item =>(

      <li>{item.id}
          
          {item.title}
          
          {item.description}
          
          {item.completed}
      </li>

    )
    
    )
  }

  render() {
          return (
            <main className="content">
            <h1 className="text-black text-center my-4"> Todo App</h1>
            <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
            
            <div className="card p-3">
              <div class = "">
                <button className="btn btn-primary"  style={{float: 'right'}} >Add task</button>
              </div>
              <div class = "">
                <button className="btn btn-primary"  onClick = {()=>this.refreshList()} >Refresh</button>
              </div>
              {this.renderTabList()}
              <ul>{this.renderItemList()}</ul>
            </div>
            </div>
            </div>


            </main>
          );
        }
        }

export default App;
