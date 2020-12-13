import React, { Component } from 'react';
import CardList from '../democardlist/CardList';
import { getDataForProduct } from './demo_service';
import './Data.scss';
import { Modal } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import store from '../redux/store/store';
import {connect} from "react-redux";
import { saveProductData } from '../redux/store/actions/demoActions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 class Data extends Component {
    constructor(props) {
        super();
       this.productData = [];  
        this.state = {
            productData : [],
            openModal : false,
            childData : []
        }

    }
/**
 * Life Cycle method is used to get the data from Json File
 * @param {componentDidMount} is calling getDataForProduct method which is in demo_service.jsx
 */
    componentDidMount(){
        getDataForProduct().then((response) => {
              store.dispatch(saveProductData(response.data.groups));
              console.log('we are getting response from Backend',response.data.groups);
              this.productData = response.data.groups;
            
            });   
            store.subscribe(()=>{
                if (store.getState().demoReducer.data) {
                    this.setState({
                        productData: store.getState().demoReducer.data
                    });
                }
            });
        }
     
        /**
         * function is used close the modal popup
         * @param {handleClose} state object are set for popup to close in this function
         */
        handleClose = () => {
            this.setState({openModal:false})
        }
        /**
         * function is used to get data from childComponent
         * @param {gettingDataFromChild}  we are receiving props and assiging to state variable
         */

        gettingDataFromChild(childData){
            console.log('childData',childData);
            this.setState({
                openModal:true,
                childData:childData
            });
        }    

    render() {      
         
        return (
            <div className="demo">
             
                  <CardList passToSuperParent={this.gettingDataFromChild.bind(this)} 
                            productObj={this.state.productData} />
                    
                   <Modal  className='modalClass'
                        open={this.state.openModal}
                        onClose={this.handleClose}
                        disableScrollLock={true}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description">

                        <Carousel className="carouselSlide" dynamicHeight={true}> 
                        {this.state.childData.map((item,i) => <div><img src={item.href} alt={item.ref}/> 
                        <p className="legend">{item.ref}</p> </div>)}   
                       </Carousel>
            
              </Modal>                                    
            </div>
        );
    }

}

const mapStateToProps = function mapStateToProps(state){
    return {
        dataFromStore:state.demoReducer.data    
    }

}

export default connect(mapStateToProps)(Data);
