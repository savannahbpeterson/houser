import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        }
        this.getHouseList = this.getHouseList.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }
    
    componentDidMount() {
        this.getHouseList()
    }

    getHouseList() {
        console.log(this.getHouseList)
        let promise = axios.get(`/api/houselist`);
        promise.then((res) => {
            console.log(res.data)
            this.setState({
                houseList: res.data
                
            })
        })
    }

    deleteProperty(id) {
        console.log('button works')
        let promise = axios.delete(`/api/property/${id}`);
        promise.then(() => {
         this.getHouseList()
        })
    }
    

    render() {
        return (
            <div id="dash_subheader">
            <h2 id="dash_heading">Dashboard</h2>
            <button id="dash_button"><Link to='/wizard/step1' >Add New Property</Link></button>
            {this.state.houseList.map((val) => {
                    return (
                        <House
                            key={val.id}
                            id={val.id}
                            name={val.name}
                            address={val.address}
                            city={val.city}
                            propertystate={val.state}
                            zipcode={val.zip}
                            deleteProperty={this.deleteProperty} />)
                })}
            </div>
        )
    }
}

export default (Dashboard);
