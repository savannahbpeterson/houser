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
                Wizard
                <input placeholder='Property Name' onChange={(e) => updateName(e.target.value)}></input>
                <input placeholder='Address' onChange={(e) => updateAddress(e.target.value)}></input>
                <input placeholder='City' onChange={(e) => updateCity(e.target.value)}></input>
                <input placeholder='State' onChange={(e) => updatePropertyState(e.target.value)}></input>
                <input placeholder='Zipcode' onChange={(e) => updateZipcode(e.target.value)}></input>
                <button><Link to='/wizard/step2'>Next Step</Link></button>
                <button><Link to='/'>Cancel</Link></button>
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