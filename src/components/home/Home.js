import React, { Component } from 'react'
import Header from "../header/Header"
import axios from 'axios';
import "./Home.css"
import store, { UPDATE_HOUSE } from '../../store';
import {Link} from "react-router-dom"

export default class Home extends Component {

               constructor(props){
                   super(props)
                   this.state ={
                       houses: store.getState().houses

                   }
               } 


   async componentDidMount(){
       store.subscribe(() =>{
           this.setState({
               houses: store.getState().houses
           })
       })
       const response = await axios.get("/api/houses")
       let action = {
           type: UPDATE_HOUSE,
           payload: response.data
       }
       
       store.dispatch(action)
       
   }




  render() {

    const displayhouse = this.state.houses.map((house) =>{
        return (
            <section className="card" key={house.id}>
                <span>Property Name: {house.name}</span>
                <span> Adderess: {house.addrsss}</span>
                <span> City: {house.city}</span>
                <span> State: {house.state}</span>
                <span> Zipcode: {house.zip}</span>
                <span> Martgage: {house.martgage}</span>
                <span> Rnet: {house.rent}</span>
                <img src={house.image} alt="pic"/>
                <button>delete</button>

            </section>
        )
       

    })
    
    return (
      <div>
          <Header/>
          <div>
            <h1>Dashbord</h1>
            
            <button>Add New House</button>
            </div>

        <section >
            
            {displayhouse}
            
        </section>
      </div>
    )
  }
}
