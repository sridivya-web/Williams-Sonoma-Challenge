import React, { Component } from 'react';
import './Card.scss';
import store from '../redux/store/store';
import {saveUserData,saveUserName,saveUserEmail,deleteUserData} from '../redux/store/actions/demoActions';
import { withRouter } from 'react-router';

/* Converting Card Component to functional Component*/ 
 class Card extends Component {
    constructor() {
        super();
        this.state = {
            onlyShow:0
        }

    }
    
    click(){
        store.dispatch(saveUserData(this.props.person.address));
        store.dispatch(saveUserName(this.props.person.name));
        store.dispatch(saveUserEmail(this.props.person.email));
        this.props.passToParent(this.props.person.address);   
        
    }
    delete(){
        console.log("delete",this.props.person.id);
        store.dispatch(deleteUserData(this.props.person.id));
    }
    render() {
       
        return (
            <div>
           
            <div className="Cards" onClick = {this.click.bind(this)}>
                <img alt="robots" className='robots' src={`https://robohash.org/${this.props.person.id}?10*10`}/>
                { /*<p>{this.props.person.id}</p>*/}
                <h6>{this.props.person.name}</h6>
                {/* <p>{this.props.person.email}</p>*/} 
               
            </div>
            <div><button onClick ={this.delete.bind(this)}> DELETE THIS RECORD</button></div>
             
            </div>
        );
    }

}

export  default withRouter(Card);