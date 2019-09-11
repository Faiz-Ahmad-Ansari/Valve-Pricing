import React from 'react';
import Price from './valveprice.json';
import Signature from './Signature.js';
console.log(Price);

class Valve extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            price: Price,
            typeSearch: '',
            mocSearch: '',
            ratingSearch: '',
            sizeSearch: ''
        }
    }

    pricing = (pricing) => {
        return(
            <div className='price'>
                <div>{pricing.Type}</div>
                <div>{pricing.MOC}</div>
                <div>{pricing.Rating}</div>
                <div>{pricing.Size}"</div>
                <div id='price'>Rs. {pricing.Price}/-</div>
            </div>
        )
    }
// input handlers start
    typeHandler = (event) =>{
        this.setState({typeSearch: event.target.value})
    }

    mocHandler = (event) =>{
        this.setState({mocSearch: event.target.value})
    }

    ratingHandler = (event) =>{
        this.setState({ratingSearch: event.target.value})
    }

    sizeHandler = (event) =>{
        this.setState({sizeSearch: event.target.value})
    }
//input handlers end

//filter start

    filterType = (fil) => {
        return(
            fil.Type.toLowerCase().includes(this.state.typeSearch.toLowerCase())
        )
    }

    filterMOC = (fil) => {
        return(
            fil.MOC.toLowerCase().includes(this.state.mocSearch.toLowerCase())
        )
    }

    filterRating = (fil) => {
        return(
            fil.Rating.toLowerCase().includes(this.state.ratingSearch.toLowerCase())
        )
    }

    filterSize = (fil) => {
        return(
            fil.Size.toString().includes(this.state.sizeSearch.toString())
        )
    }
//filter end

    render(){
        return(
            <div>
                <h1>Valve Pricing</h1><hr></hr>
                <form class='form'>
                    <input type='text' placeholder='Valve Type' onChange={this.typeHandler} />
                    <input type='text' placeholder='Valve MOC' onChange={this.mocHandler} />
                    <input type='text' placeholder='Valve Rating' onChange={this.ratingHandler} />
                    <input type='text' placeholder='Valve Size' onChange={this.sizeHandler} />
                </form>
                <div className='valveparameter'>
                    <div>Type</div>
                    <div>MOC</div>
                    <div>Rating</div>
                    <div>Size</div>
                    <div>Price</div>
                </div>
                <div>
                    {this.state.price.filter(this.filterType)
                                        .filter(this.filterMOC)
                                         .filter(this.filterRating)
                                          .filter(this.filterSize)
                                           .map(this.pricing)}
                </div>
                <Signature />
            </div>
        )
    }
}

export default Valve;