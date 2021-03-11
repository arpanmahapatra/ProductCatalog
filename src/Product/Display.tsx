import { Modal, PrimaryButton } from '@fluentui/react';
import React, { Component } from 'react'
import Form from './Form';
import edit from '../Images/edit.png'
import {flagforbutton,} from '../Prod';
interface Props {

    options:any;    
    parentCallback:Function;
    delete:Function;
    product: {

        id: number,
        draft:number,
        namee: string,
        type: string,
        discipline: string,
        sponsor: string,
        desc: string,
        scope: string, target: string,
        relprod: string,
        milli: boolean,
        ip: string,
        date: string,
        practice: string,
    }
}
interface State {
    
    editf: boolean,
    isOpenForm:boolean
    
}
class Display extends React.Component<Props, State> {
    
    constructor(props: any) {
        super(props);        
        this.state = {
            editf: false,
              isOpenForm:false          
        }        
        
    }

    edit(e: any) {
        flagforbutton(2)
        
        this.setState({
            editf: true, isOpenForm:true
        });
        
        
        
    }
    editproduct(childData: any , id1:number,flag:any) {
     
        this.props.parentCallback(childData,id1,flag);

        this.setState({
            isOpenForm:false
        })
    }

    delete(childData: any , id1:number,flag:any) {
        this.setState({
            editf:false
        })
        this.props.delete(childData,id1,flag);
    }
    closeForm(){
        this.setState({
            isOpenForm:false
        })
    }
    render() {
    
        return (
      

                <div>
                        <div className="flexrow">
                        <h2 className="h1">{this.props.product.namee}</h2>
                        <button className="editimg" onClick={this.edit.bind(this)}><img src={edit} width="30px" height="30px"></img></button>
                        <Modal isOpen={this.state.isOpenForm}> 
                    <div>   
                <div className="modal">


<div className="modal-content">
  <span className="close" onClick={this.closeForm.bind(this)}>&times;</span>
                        {

                            this.state.editf ? <Form options={this.props.options} delete={this.delete.bind(this)} parentCallback={this.editproduct.bind(this)} draft={this.editproduct.bind(this)} length={this.props.product.id}  productProp={this.props.product} flag={1}/> : null
                        }
</div></div></div></Modal>
                        
                        </div>
                        
                         
                        <p className="h1">Details</p>

                        <hr></hr>

                        <div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Description</p>
                                {this.props.product.desc}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Name</p>
                                {this.props.product.namee}
                            </div>
                        </div>
                        <div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Type</p>
                                {this.props.product.type}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Discipline</p>
                                {this.props.product.discipline}
                            </div>
                        </div>
                        <div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Sponsor</p>
                                {this.props.product.sponsor.toString()}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Scope</p>
                                {this.props.product.scope}
                            </div>
                        </div>
                        <div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Target</p>
                                {this.props.product.target}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Relative Products</p>
                                {this.props.product.relprod}
                            </div>
                        </div><div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Milliman Products</p>
                                {this.props.product.milli.toString()}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Ip</p>
                                {this.props.product.ip}
                            </div>
                        </div>
                        <div className="flexrow">
                            <div className="displayOfEachAttribute">
                                <p className="h1">Date</p>
                                {this.props.product.date}
                            </div>
                            <div className="displayOfEachAttribute">
                                <p className="h1">Practice</p>
                                {this.props.product.practice}
                            </div>
                        </div>
    
                    </div>

           
          
            
            
        )
    }

    
}

export default Display
