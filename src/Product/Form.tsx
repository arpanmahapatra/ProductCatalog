import React, { Component } from 'react'
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { ComboBox, Modal, Panel} from '@fluentui/react'; 
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import {PrimaryButton} from 'office-ui-fabric-react';
import {product} from '../Services/Prod';
import { prod } from '../Services/ProductArray';
import '../Scss/Common.scss';
import '../Scss/Form.scss';

       var x = 1;
       var sponsor:[0]
       var  type:""
       var  discipline:""       
       var  target:""
       var  relprod:""
       var  ip:""
       var  date:""
       var  practice:""
interface Props {
  parentCallback:Function;
  draft:Function;
  delete:Function;
  length:number
  options:any
  flagSubmitUpdate:boolean
  productProp:any
   flag:any  
}

interface State {
  product:any

  deleteConfirmation:boolean,
  pname:boolean,
  ptype:boolean,
  pdis:boolean,
  pspon:boolean,
  pdesc:boolean,
  prel:boolean,
  ptarget:boolean,
  pscope:boolean,
  pip:boolean,
  pmilli:boolean,
  pprac:boolean,
  pdate:boolean,

  disp:boolean,
  deleteModal:boolean,
  nameerror: string,
  typeerror: string,
  disciplineerror: string,
  sponsorerror:string,
  descerror: string,
  scopeerror: string,
}
class Form extends React.Component<Props , State> {
  
  constructor(props:any) {
      super(props); 
      
      this.state = { 
  deleteConfirmation:false,
  deleteModal:false,
  pname:false,
  ptype:false,
  pdis:false,
  pspon:false,
  pdesc:false,
  prel:false,
  ptarget:false,
  pscope:false,
  pip:false,
  pmilli:false,
  pprac:false,
  pdate:false, 

  nameerror:"" ,
  typeerror: "",
  disciplineerror: "",
  sponsorerror:"",
  descerror: "",
  scopeerror: "",  

      product:{
        draft:0, 
        namee:this.props.productProp.namee,
        type:this.props.productProp.type,
        discipline:this.props.productProp.discipline,
        sponsor:this.props.productProp.sponsor,
        desc:this.props.productProp.desc,
        scope:this.props.productProp.scope,
        target:this.props.productProp.target,
        relprod:this.props.productProp.relprod,
        milli:this.props.productProp.milli,
        ip:this.props.productProp.ip,
        date:this.props.productProp.date,
        practice:this.props.productProp.practice,
        id:props.length1,
      },
      disp:true,
      
    };
    }
  productTextField = (e:any , sel:any) =>
  {
    

    var p=this.state.product;
    if(e.target.name!="" && e.target.lang==""){
     
     var value = e.target.value;
     var name = e.target.name;
     
  
    if(name=="namee")
    {
      
      p.namee=value
      
     
      this.setState(({
        pname: true

      }))
    
      console.log(this.state.product.namee)
    }
    if(name=="scope")
    {
      this.setState(({
        pscope: true

      }))
      this.state.product.scope=value
    }
    
    if(name=="desc")
    {
      this.setState(({
        pdesc: true

      }))

      this.state.product.desc=value
    }
    

  }
  else if(e.target.lang!=""){
      var value = sel.text;
     var name = e.target.lang;
  
     console.log(name)
     if(name=="type")
    {
      this.setState(({
        ptype: true

      }))

      p.type=value
      console.log(this.state.product.type)
    }
    if(name=="target")
    {
      this.setState(({
        ptarget: true

      }))
      p.target=value
    }
    
    if(name=="practice")
    {
      this.setState(({
        pprac: true

      }))
      p.practice=value
    }
    if(name=="discipline")
    {
      this.setState(({
        pdis: true

      }))
      p.discipline=value
    }
    if(name=="ip")
    {
      this.setState(({
        pip: true

      }))
      p.ip=value
    }
    if(name=="relprod")
    {
      this.setState(({
        prel: true

      }))
      p.relprod=value
    }

    if(this.state.product.type=="")
    {
      this.setState(({
        ptype: false

      }))
    }
    if(this.state.product.target=="")
    {
      this.setState(({
        ptarget: false

      }))
    }
    if(this.state.product.practice=="")
    {
      this.setState(({
        pprac: false

      }))
    }
    if(this.state.product.discipline=="")
    {
      this.setState(({
        pdis: false

      }))
    }
      if(this.state.product.ip=="")
    {
      this.setState(({
        pip: false

      }))
    }

      if(this.state.product.relprod=="")
    {
      this.setState(({
        prel: false

      }))
    }


  }

  
  console.log(this.state.product);
   
  
      
  

    }


  
    
  pdate(e:any)
  {
     var p = this.state.product;
    p.date = e.target.value;
  
    this.setState({
      pdate: true
    })

  }

  pspon(e:any,sel:any)
  {
  
    
     console.log([e.target.lang])
     var flag = true
     var p = this.state.product;
      if(sel.selected){
     for(var i=0;i<p.sponsor.length;i++)
     {
          if(sel.text==p.sponsor[i])
          {flag=false;break;}
     }
     if(flag)
     p.sponsor.push(sel.text)
   }
   else{
     for(var i=0;i<p.sponsor.length;i++)
     {
          if(sel.text==p.sponsor[i])
          {p.sponsor.splice(i,1)}
     }
 
   }
    
     this.setState({
       pspon: true
     })
 
     
    

  }
  pdiscipline(e:any,sel:any)
  {
    
      var p = this.state.product;
      p.discipline = sel.text;
      this.setState({
        pdis: true
      })
  
  
     
  }

  pmilli(e:any, b:any){
    var p = this.state.product;  
    p.milli = b; 
    
 
    
    this.setState({
      pmilli: true
    })

  }
  deleteModalFlag()
    {
      this.setState({
        deleteModal:false

      })
    }

  submitUpdate(event:any)
  {

    sponsor=[0]
    this.setState({
       disp:false,      
    })   

    if(this.state.pname==false)
    {
      this.state.product.namee=this.props.productProp.namee;
    }
    if(this.state.ptype==false)
    {
      this.state.product.type=this.props.productProp.type;
    }
    if(this.state.pdesc==false)
    {
      this.state.product.desc=this.props.productProp.desc;
    }
    if(this.state.pdis==false)
    {
      this.state.product.discipline=this.props.productProp.discipline;
    }
    if(this.state.prel==false)
    {
      this.state.product.relprod=this.props.productProp.relprod;
    }
    if(this.state.pdate==false)
    {
      this.state.product.date=this.props.productProp.date;
    }
    if(this.state.pmilli==false)
    {
      this.state.product.milli=this.props.productProp.milli;
    }
    if(this.state.pspon==false)
    {
      this.state.product.sponsor=this.props.productProp.sponsor;
    }
    if(this.state.ptarget==false)
    {
      this.state.product.target=this.props.productProp.target;
    }
    if(this.state.pscope==false)
    {
      this.state.product.scope=this.props.productProp.scope;
    }
    if(this.state.pprac==false)
    {
      this.state.product.practice=this.props.productProp.practice;
    }
    if(this.state.pip==false)
    {
      this.state.product.ip=this.props.productProp.ip;
    }
    

    
    this.state.product.draft=2;

    if(this.validate()){
     
    this.props.parentCallback(this.state.product,this.state.product.id,this.props.flag);
  }
  else{
    this.validate()
  }
  } 
 
  validate(){
   var flag=true
    if(this.state.product.namee==""  || this.state.product.namee==null)
    {
      console.log(this.state.product)
      this.setState({
        nameerror:"Name cannot be left as blank"
      })
      flag=false;
    }
    else{
      this.setState({
        nameerror:"",
      })
    }
    if(this.state.product.type==""  || this.state.product.type==null)
    {
      this.setState({
        typeerror:"Type cannot be left as blank"
      })
      flag=false;
    }
    else{
      this.setState({
        typeerror:"",
      })
    }
    if(this.state.product.desc==""  || this.state.product.desc==null)
    {
      this.setState({
        descerror:"Description cannot be left as blank"
      })
      flag=false;
    }
    else{
      this.setState({
        descerror:"",
      })
    }
    if(this.state.product.sponsor==""  || this.state.product.sponsor==null)
    {
      this.setState({
        sponsorerror:"sponsor cannot be left as blank"
      })
      flag=false;
    }else{
      this.setState({
        sponsorerror:"",
      })
    }
    if(this.state.product.discipline==""  || this.state.product.discipline==null)
    {
      this.setState({
        disciplineerror:"discipline cannot be left as blank"
      })
      flag=false;
    }else{
      this.setState({
        disciplineerror:"",
      })
    }
    if(this.state.product.scope==""  || this.state.product.scope==null)
    {
      this.setState({
        scopeerror:"scope cannot be left as blank"
      })
      flag=false;
    }else{
      this.setState({
        scopeerror:"",
      })
    }

return flag
    

  }


  setDeleteFlag(){

   
    this.setState({
    deleteConfirmation:true,deleteModal:true
  })
  
  }


  delete(e:any){ 
         
    this.setState({
      disp:false,     
   })

   this.props.delete(this.state.product,this.state.product.id,this.props.flag);
      
  }


  validateForDraft(){
    var flag=true
    if(this.state.product.namee==""  || this.state.product.namee==null)
    {
      
      this.setState({
        nameerror:"Name cannot be left as blank"
      })
      flag=false;
    }
    else{
      this.setState({
        nameerror:"",
      })
    }
 if(this.state.product.sponsor==""  || this.state.product.sponsor==null)
    {
      this.setState({
        sponsorerror:"sponsor cannot be left as blank"
      })
      flag=false;
    }else{
      this.setState({
        sponsorerror:"",
      })
    }
    return flag
    
  }

  draft(e:any)
  {


    if(this.validateForDraft()){

    this.setState({
      disp:false,      
   })
   
   
   this.state.product.draft=1;
   this.props.draft(this.state.product,this.state.product.id,this.props.flag);
   
  }
  else{
    this.validateForDraft()
  }
}
    render() { 



      
         sponsor=[0]
         type=""
         discipline=""
         target=""
         relprod=""
         ip=""
         date=""
         practice=""
     
        
     if(this.props.options!=undefined){
      this.props.options.map((data: any, key: any) => {
        if(sponsor!=undefined)
           for(var i=0;i<this.props.productProp.sponsor.length;i++)
           { 
        if(data.text == this.props.productProp.sponsor[i])
        {
          if(!sponsor.includes(data.key))
            sponsor.push(data.key)                   
        }
        
           }
      })
      this.props.options.map((data: any, key: any) => {
        if(data.text == this.props.productProp.type)
        {          
            type=data.key         
        }
      })
      this.props.options.map((data: any, key: any) => {
        

        if(data.text == this.props.productProp.ip)
        {
          
            ip=data.key
         
        }
      })
      this.props.options.map((data: any, key: any) => {
        

        if(data.text == this.props.productProp.target)
        {
          
            target=data.key
         
        }
      })
      this.props.options.map((data: any, key: any) => {
        

        if(data.text == this.props.productProp.discipline)
        {
          
            discipline=data.key
         
        }
      })
      this.props.options.map((data: any, key: any) => {
        

        if(data.text == this.props.productProp.relprod)
        {
          
            relprod=data.key
         
        }
      })
      this.props.options.map((data: any, key: any) => {
        

        if(data.text == this.props.productProp.practice)
        {
          
            practice=data.key
         
        }
      })
    }
    

        return (
          
          
            <div>
  <h1 className="h1">Notification</h1>
  <p>Please Enter the following information about your product</p>


{ this.state.deleteConfirmation ?
<Modal isOpen={this.state.deleteModal} ><div className="deleteModal"><h2>Do you want to delete this product?</h2>
 <div className="flexrow"> <div><PrimaryButton className="deleteModalButtonYes"  onClick={this.delete.bind(this)}>YES</PrimaryButton>
  </div>
  <div>
  <PrimaryButton className="deleteModalButtonNo"onClick={this.deleteModalFlag.bind(this)}>NO</PrimaryButton>
  </div>
  </div>
  </div>
  
  </Modal>: null
    }
<form>
  <h2 className="h1">Product Details</h2>
      <div  className="flexrow">
          <div className="flexcol"> 
          <label>Product Name<span className="red">*</span></label>
              <TextField placeholder="Enter the product name" autoComplete="off" className="input" defaultValue={this.state.product.namee}  onChange={this.productTextField.bind(this)} name="namee" />
              <p id="name_error">{this.state.nameerror}</p>
 
          </div>
          <div className="flexcol"> 
          <label>Product Type<span className="red">*</span></label>
          <Dropdown placeholder="Product" onChange={this.productTextField.bind(this)} lang="type"
           className="input" options={this.props.options} defaultSelectedKey={type}/>
           <p id="type_error">{this.state.typeerror}</p>
          </div>
      </div>
      <div  className="flexrow">
          <div className="flexcol"> 
          <label>Discipline<span className="red">*</span></label> 
          <ComboBox  lang="dis"  placeholder="Select relevant discipline" onChange={this.pdiscipline.bind(this)}
   useComboBoxAsMenuWidth={ true } 
   options={this.props.options} defaultSelectedKey={discipline}
 className="input"/>
 <p id="dis_error">{this.state.disciplineerror}</p>
 
          </div>
          <div className="flexcol"> 
          <label>Products Sponsor<span className="red">*</span></label> 
          <Dropdown
            placeholder="Select Product's practice"  onChange={this.pspon.bind(this)}
            multiSelect lang="sponsor"
            defaultSelectedKeys={sponsor}  
            options={this.props.options} className="input"/>
            <p id="sponsor_error" className="error">{this.state.sponsorerror}</p> 
          </div>
          </div>
          <h2 className="h1">Product Information</h2>
          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Product Description<span className="red">*</span></label> 
          <TextField   multiline rows={4} className="input" placeholder="Describe product in few words" defaultValue={this.state.product.desc} onChange={this.productTextField.bind(this)} name="desc" />
          <p id="desc_error" className="error">{this.state.descerror}</p>
          </div>
          <div className="flexcol">
          <label>Product scope<span className="red">*</span></label>
          <TextField multiline rows={4}  className="input" placeholder="Enter Product Scope" defaultValue={this.state.product.scope} onChange={this.productTextField.bind(this)} name="scope" />
          <p id="scope_error" className="error">{this.state.scopeerror}</p>
          </div>
          </div>

          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Target Market</label> 
          <Dropdown placeholder="Enter Industry to which its targeted"
           onChange={this.productTextField.bind(this)}  lang="target"
           options={this.props.options} defaultSelectedKey={target} className="input" />
 
          </div>
          <div className="flexcol"> 
          <label>Related Products</label>
          <Dropdown onChange={this.productTextField.bind(this)}  lang="relprod"
            placeholder="Select Products realted to this one"  
            options={this.props.options} defaultSelectedKey={relprod}
          className="input"/>
          </div>
          </div>
   
          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Does the product overlap with existing Milliman's product</label>
          <Toggle lang="milli" className="input" onText="On" offText="Off" defaultChecked={this.props.productProp.milli} onChange={this.pmilli.bind(this)}/>
 
          </div>
          <div className="flexcol"> 
          <label>IP Source</label>
          <Dropdown  lang="ip"
             placeholder="Select Ip source" options={this.props.options} defaultSelectedKey={ip}   onChange={this.productTextField.bind(this)}
           className="input"/>
          </div>
          </div>

          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Product Finish Date</label>
          <input type="date" className="inputdate" onChange={this.pdate.bind(this)} defaultValue={this.props.productProp.date}></input>      
          </div>
          <div className="flexcol"> 
          <label>Select the other practices involved</label>
          <Dropdown  onChange={this.productTextField.bind(this)} lang="practice"
             placeholder="Select the Other Practices involved"  
          options={this.props.options} defaultSelectedKey={practice} className="input"/>
          </div>
          </div>

          { this.props.flagSubmitUpdate ? 
          <div className="flexrow"> 
          <PrimaryButton text={'Submit'} id="submit" onClick={this.submitUpdate.bind(this)}/>
          <PrimaryButton text={'Save As Draft'}  id="Draft" onClick={this.draft.bind(this)}/> 
          </div>:
           <div className="flexrow">
           <PrimaryButton text={'Update'} id="update" onClick={this.submitUpdate.bind(this)}/>
           <PrimaryButton text={'Delete'} id="delete" onClick={this.setDeleteFlag.bind(this)} />
           </div> 
    }
          
                
  </form>
</div>


            
        
        )
    }
    componentDidMount()
    {
      
      
      this.setState({
        
        product:{
          draft:0,
          id:this.props.length,
          namee:"",
          type:"",
          discipline:"",
          sponsor:[],
          desc:"",
          scope:"",target:"",
          relprod:"",
          milli:"",
          ip:"",
          date:"",
          practice:"",
        },

        pname:false,
  ptype:false,
  pdis:false,
  pspon:false,
  pdesc:false,
  prel:false,
  ptarget:false,
  pscope:false,
  pip:false,
  pmilli:false,
  pprac:false,
  pdate:false, 
        disp:true,

      })
         

    }


    
}

export default Form



