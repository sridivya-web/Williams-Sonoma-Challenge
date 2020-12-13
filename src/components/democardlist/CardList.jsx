import React, { Component } from 'react';
import Card from '../democard/Card'
import './CardList.css';

 
export  default class CardList extends Component {
    constructor() {
        super();
        this.state = {
            onlyShow: 0
        }

    }
    render() {
      
        return (
            <div className="cardGrid">
              {this.props.productObj.map((product)=> <Card passToParent ={this.props.passToSuperParent}  product={product}/>)}  
            </div>
           
        );
    }

}