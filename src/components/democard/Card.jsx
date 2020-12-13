import React from 'react';
import './Card.scss';
/**
         * Card is a functional component
         * @param {Card}  we are receiving props and we are displaying product information and details. 
         */

export default function Card(props){
   
    return (
      
                <div className="Cards"  style={{backgroundImage: `url(${props.product.hero.href})`}}  
                onClick = {()=> {props.passToParent(props.product.images);}}> 
                        <div className="CardsTitle">
                                <div>
                                {((props.product.name).replace("&amp;", "&")).toUpperCase()}
                                </div>

                                <div>
                                {props.product.price && props.product.price.regular !== ' ' ? `$${props.product.price.regular}` : ' '}
                                {props.product.priceRange && props.product.priceRange.selling.high !== ' ' ? `$${props.product.priceRange.selling.high}` : ' '}
                                </div>
                        </div>
                        
                </div>
      

    )

}