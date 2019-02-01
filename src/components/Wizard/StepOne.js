import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updatePropertyState, updateZipcode} from '../../ducks/reducer';

class StepOne extends Component {

    componentDidUpdate(){

    }
  
    render () {
        // console.log(this.props)
        const {updateName, updateAddress, updateCity, updatePropertyState, updateZipcode} = this.props;
        return (
            <div>
                <p>Add New Listing</p>
                <button><Link to='/'>Cancel</Link></button>
                <br></br>
                Property Name
                <br></br>
                <input onChange={(e) => updateName(e.target.value)}></input>
                <br></br>
                Address
                <br></br> 
                <input onChange={(e) => updateAddress(e.target.value)}></input>
                <br></br>
                City
                <input  onChange={(e) => updateCity(e.target.value)}></input>
                State 
                <input onChange={(e) => updatePropertyState(e.target.value)}></input>
                Zipcode                
                <input onChange={(e) => updateZipcode(e.target.value)}></input>
                <button><Link to='/wizard/step2'>Next Step</Link></button>
                </div> 
        )
    }
}

function mapStateToProps (state) {
const {name, address, city, propertystate, zipcode} = state
return {
    name,
    address,
    city,
    propertystate,
    zipcode
}
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updatePropertyState, updateZipcode})(StepOne);