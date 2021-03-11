import React, { Component } from 'react'
import {PrimaryButton} from 'office-ui-fabric-react';
import Form from './Form';
import Display from './Display';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { product , prod,flagforbutton} from '../Prod';
import { Modal } from '@fluentui/react';
var tempid=-99
var flagForAdding = false
var display: any[] =[]
var defaultProduct = new product(0, "","","",[""],"","","","",false,"","", "",0)
interface Props {    
}
interface State {

    isOpenModal:boolean 
    isOpenForm:boolean
    searchedFlag:boolean
    searchTerm:string
    options:any
    showComponent: boolean
    addedFlag:boolean
    totalFlag:boolean
    draftFlag:boolean
    productt: {
        id:number,
        draft:number,
        namee: string,
        type: string,
        discipline: string,
        sponsor: [string],
        desc: string,
        scope: string, target: string,
        relprod: string,
        milli: boolean,
        ip: string,
        date: string,
        practice: string,

    }
  
    
}

class Product extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        display=prod
        this.state = {
            isOpenModal:false,
            isOpenForm:false,
            searchedFlag:false,
            options: [
                {key:'1', text:'Lamborghini AvArpan'},
                {key:'2', text:'VWArpan'},
                {key:'3', text:'Arpan'},
              ],  
            showComponent: false,
            addedFlag:false,
            totalFlag:true,
            draftFlag:false,
            
            productt : new product(prod.length+1, "","","",[""],"","","","",false,"","", "",0),   
            searchTerm: '',
        }
      
        this.Add = this.Add.bind(this);
    }

    displayCard(id1:any) {
            this.setState({
             isOpenModal:true,
        });
        prod.map(p => (
            p.id==id1 ? tempid=id1 : null
        ))   
    }

    Add() { 
        flagforbutton(1)
        this.setState({
            showComponent: true, isOpenForm:true
        });
    }

    addedproducts(){
        
        this.setState({
             isOpenModal:false,
            totalFlag:false,
        
            addedFlag: true,
       
            draftFlag: false,
        });
        display=[];
        for(var i=0;i<prod.length;i++)
           {
               if(prod[i].draft==2)
               {
                   display.push(prod[i]);
               }
           }
           
        
    }
    totalproducts(){

        this.setState({
            isOpenModal:false,
            totalFlag:true,
        
            addedFlag: false,
       
            draftFlag: false,
        });
        
        display=prod
        
    }
    draftproducts(){
        this.setState({
            isOpenModal:false,
            totalFlag:false,
        
            addedFlag: false,
       
            draftFlag: true,
        });
        display=[];
           for(var i=0;i<prod.length;i++)
           {
               if(prod[i].draft==1)
               {
                   
                   display.push(prod[i]);
               }
           }
        

    }
    edit(id1:number, childData:any)
    {
        prod[id1].namee = childData.namee
        prod[id1].type = childData.type
        prod[id1].discipline = childData.discipline
        prod[id1].desc = childData.desc
        prod[id1].sponsor = childData.sponsor
        prod[id1].scope = childData.scope
        prod[id1].target = childData.target
        prod[id1].milli= childData.milli
        prod[id1].date = childData.date
        prod[id1].practice = childData.practice
        prod[id1].ip = childData.ip
        prod[id1].relprod = childData.relprod

    }
    handleCallback = (childData: any , id1:number,flagEditAdd:any) => {
        this.setState({
             isOpenModal:false, showComponent: false, isOpenForm:false
        });
        flagForAdding =false
       tempid=-99
       if(flagEditAdd==0){
        this.setState({ productt: childData })
        prod.push(childData)
       
    }
 else{
            this.edit(id1-1,childData)
        }
    }

    draft=(childData: any , id1:number,flagEditAdd:any)=>{

        flagForAdding =false
       this.setState({
        showComponent: false, isOpenForm:false
    });

       
   
       if(flagEditAdd==0){
        this.setState({ productt: childData })
  
        prod.push(childData)
        
    
       }
        }


    delete=(childData: any , id1:number,flag:any)=>{
        this.setState({
            isOpenModal:false,showComponent: false,productt: childData
        });         
        flagForAdding =false
        
        prod.splice(id1-1,1);
        
        
        if(this.state.draftFlag || this.state.addedFlag)
        display.splice(id1-5,1);
        console.log(display)
        
        for(var i=id1-1;i<prod.length;i++)
        {
            prod[i].id--;
        }

}




  search(newValue:string)
  {
      
    this.setState({
        searchedFlag:true
    })
    display=[];
    this.setState({searchTerm:newValue})
      var x=display;
      for(var i=0;i<prod.length;i++)
      {
          var name = prod[i].namee
          if(name.toLowerCase().includes(newValue.toLowerCase())){
            
             display.push(prod[i]);
          }
      }
        
  }
closemodal(){

    this.setState({
        isOpenModal:false,
    })
}

closeForm(){
    this.setState({
        isOpenForm:false,
    })
}
    

       render() {
           
           
        return (
            <div>               
                <div className=".flexRowML20">
                    <SearchBox placeholder="Search Product catalog" onSearch={(newValue: string) => this.search(newValue)} className="searchBar" />
                    <div><PrimaryButton text={'Add'} onClick={this.Add} />

                    </div>
                    <Modal isOpen={this.state.isOpenForm}> 
                    <div id="form">   
                <div id="myModal" className="modal">


<div className="modal-content">
  <span className="close" onClick={this.closeForm.bind(this)}>&times;</span>
                    {
                         this.state.showComponent ?
                        <Form delete={this.delete} parentCallback={this.handleCallback} draft={this.draft} options={this.state.options} length={prod.length+1} productProp={defaultProduct} flag={0}/> :null
                    }
                    </div>
                    </div>
                    </div>
                    </Modal>
                </div>
                <div className="heading"><h1>Product Catalog</h1></div>
                <div className="flexrow">
                <PrimaryButton text={'All Products'} className="displayButtons" onClick={this.totalproducts.bind(this)}/>
                <PrimaryButton text={'Draft Products'} className="displayButtons" onClick={this.draftproducts.bind(this)} />
                <PrimaryButton text={'Submitted Products'}  className="displayButtons" onClick={this.addedproducts.bind(this)}/>
                </div>
         <p className={'.mleft20px'}>Showing {display.length} products</p>
            <div className={'prod-cards'}>
                {
                this.state.searchedFlag ?  
                this.state.totalFlag ?
                display.map(p => (
                    <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                        <p>{p.sponsor}</p>
                   </div>
                )): this.state.draftFlag ? display.map(p => (

                    p.draft==1?
                    <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                        <p>{p.sponsor}</p>
                   </div>:null
                )): this.state.addedFlag ? display.map(p => (

                    p.draft==2?
                    <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                        <p>{p.sponsor}</p>
                   </div>:null
                    )):null : this.state.totalFlag ?
                    prod.map(p => (
                        <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                            <p>{p.sponsor}</p>
                       </div>
                    )): this.state.draftFlag ? prod.map(p => (

                        p.draft==1?
                        <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                            <p>{p.sponsor}</p>
                       </div>:null
                    )): this.state.addedFlag ? prod.map(p => (

                        p.draft==2?
                        <div onClick={() => this.displayCard(p.id)} className={'prod-card'}><h2>{p.namee}</h2>
                            <p>{p.sponsor}</p>
                       </div>:null
                        )):null
                    }
                    
                             
<Modal isOpen={this.state.isOpenModal}> 
<div className="modalDisplay">

                    <div className="modal-content">
                        <span className="close" onClick={this.closemodal.bind(this)} >&times;</span>
                    {
                        
                    display.map(p => (
                        p.id==tempid ? <Display product={p}  options={this.state.options} parentCallback={this.handleCallback} delete={this.delete}/>:null
                    ))
                                        
                    }
                    </div></div>
                     </Modal>
                                   </div>

                                  
                                </div>

        )
    }
}


export default Product
