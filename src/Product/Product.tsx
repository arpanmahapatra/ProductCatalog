import React, { Component } from 'react'
import {PrimaryButton} from 'office-ui-fabric-react';
import Form from './Form';
import Display from './Display';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { product } from '../Services/Prod';
import { DocumentCard, Modal, Panel, PanelType } from '@fluentui/react';
import { prod } from '../Services/ProductArray';
import {flagforbutton } from  '../Services/DisplayFlag'
import '../Scss/Product.scss';
import '../Scss/Common.scss';
var tempid=-99
var flagForAdding = false
var empty: never[]=[]
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
    selectedProd:Array<any>
    empty:any
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
            empty:[],
            selectedProd:prod,
            isOpenModal:false,
            isOpenForm:false,
            searchedFlag:false,
            options: [
                {key:'1', text:'Product 1'},
                {key:'2', text:'Product 2'},
                {key:'3', text:'Product 3'},
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
            showComponent: true, isOpenForm:true, searchedFlag:false,selectedProd:prod
        });
    }
    addedproducts(){
        
        this.setState({
            isOpenModal:false,
           totalFlag:false,
       
           addedFlag: true,
           searchedFlag:false,
           draftFlag: false,
           selectedProd:[]
           
       });
       
       
          for(var i=0;i<prod.length;i++)
          {
              if(prod[i].draft==2)
              {
                  console.log('a')
                  
                  this.setState({
                   selectedProd: [...this.state.empty, prod[i]]
                  })
              }
          }
          console.log(this.state.selectedProd)
        
    }
    totalproducts(){

        this.setState({
            isOpenModal:false,
            totalFlag:true,
        
            addedFlag: false,
       
            draftFlag: false,
            
                searchedFlag:false,
            
        
            selectedProd:prod
        })
    
        
    }
    draftproducts(){
        this.setState({
            isOpenModal:false,
            totalFlag:false,
            searchedFlag:false,
            addedFlag: false,
       
            draftFlag: true,
        });
        this.setState({
            selectedProd:[]
        })
           
          for(var i=0;i<prod.length;i++)
          {
              if(prod[i].draft==1)
              {
                  console.log('a')
                  
                  this.setState({
                   selectedProd: [...this.state.empty, prod[i]]
                  })
              }
          }
          console.log(this.state.selectedProd)
        

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
        this.state.selectedProd.splice(id1-5,1);
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
    this.setState({
        selectedProd:[]
    })
      display=[]
    this.setState({searchTerm:newValue})
      var x=this.state.selectedProd;
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
                    <Panel type={PanelType.extraLarge} isOpen={this.state.isOpenForm} onDismiss={this.closeForm.bind(this)}> 
                    <div>   
                <div>
             <div>
                     {
                         this.state.showComponent ?
                        <Form delete={this.delete} parentCallback={this.handleCallback} draft={this.draft} options={this.state.options} length={prod.length+1} productProp={defaultProduct} flag={0} flagSubmitUpdate={true}/> :null
                    }
                    </div>
                    </div>
                    </div>
                    </Panel>
                </div>
                <div className="heading"><h1>Product Catalog</h1></div>
                <div className="flexrow">
                <PrimaryButton  className="displayButtons" onClick={this.totalproducts.bind(this)}>
                    {
                        this.state.totalFlag?<u className="underline">All Products</u>:<p>All Products</p>
                    }
                    </PrimaryButton>
                <PrimaryButton className="displayButtons" onClick={this.draftproducts.bind(this)} >
                {
                        this.state.draftFlag?<u>Draft Products</u>:<p>Draft Products</p>
                    }</PrimaryButton>
                <PrimaryButton  className="displayButtons" onClick={this.addedproducts.bind(this)}>
                {
                        this.state.addedFlag?<u>Submitted Products</u>:<p>Submitted Products</p>
                    }</PrimaryButton>
                </div>

                {/* The code below is to display the number of products when searched / when not searched */}

                
                {   this.state.searchedFlag?
                    <div>
                      <p className={'.mleft20px'}>Showing {display.length} products</p>
                 
                    </div>:<div>
                      < p className={'.mleft20px'}>Showing {this.state.selectedProd.length} products</p>
                 
                    </div>
                }


                {/* The code below is to display the products when searched / when not searched */}
         
         <div className={'prod-cards'}>
            {
                    this.state.searchedFlag?display.map((p) => (
                        
                        <DocumentCard onClick={() => this.displayCard(p.id)} className='prod-card'>
      <div className="card"><h2>{p.namee}</h2>
                            <p>{p.sponsor}</p>
                       </div></DocumentCard>
                    )):
            
                this.state.selectedProd.map((p: { id: any; namee: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; sponsor: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    <DocumentCard onClick={() => this.displayCard(p.id)} className='prod-card'><div className="card"><h2>{p.namee}</h2>
                        <p>{p.sponsor}</p>
                   </div></DocumentCard>
                ))
       }
                    
                             
<Panel type={PanelType.extraLarge} isOpen={this.state.isOpenModal} onDismiss={this.closemodal.bind(this)}> 
<div>

                    <div>
                        
                    {
                        
                        prod.map(p => (
                        p.id==tempid ? <Display closeDisplay={this.closemodal.bind(this)} product={p}  options={this.state.options} parentCallback={this.handleCallback} delete={this.delete}/>:null
                    ))
                                        
                    }
                    </div></div>
                     </Panel>
                                   </div>

                                  
                                </div>

        )
    }
}


export default Product



