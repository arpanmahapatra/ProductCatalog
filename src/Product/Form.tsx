import React, { Component } from 'react'
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { ComboBox} from '@fluentui/react'; 
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import {PrimaryButton} from 'office-ui-fabric-react';
import {product} from '../Prod';

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

  productProp:any
   flag:any
  
}

interface State {
  product:any

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

      product : new product(
        0, 
        this.props.productProp.namee,
        this.props.productProp.type,
        this.props.productProp.discipline,
        this.props.productProp.sponsor,
        this.props.productProp.desc,
        this.props.productProp.scope,
        this.props.productProp.target,
        this.props.productProp.relprod,
        this.props.productProp.milli,
        this.props.productProp.ip,
        this.props.productProp.date,
        this.props.productProp.practice,
        props.length1,
      ),
      disp:true,
      
    };
    }
  pname(e:any)
  {

    var p = this.state.product;
    p.namee = e.target.value;
    this.setState({
      pname: true
    })


  }
  ptype(e:any , sel:any)
  {
    var p = this.state.product;
    p.type = sel.text; 
    this.setState({
      ptype: true
    })
  }
    
  pdis(e:any, sel:any)
  {
    var p = this.state.product;
    p.discipline = sel.text;
    this.setState({
      pdis: true
    })


  }
    
  pspon(e:any, sel:any)
  {
   
    var p = this.state.product;
    p.sponsor.push(sel.text); 
    this.setState({
      pspon: true
    })
  }
    
  pdesc(e:any)
  {

    var p = this.state.product;
    p.desc = e.target.value; 
    e.target.value =null;
    this.setState({
      pdesc: true
    })
  }
    
  pscope(e:any)
  {
    var p = this.state.product;
    p.scope = e.target.value; 
    this.setState({
      pscope: true
    })
  }
    
  pip(e:any, sel:any)
  {
    var p = this.state.product;
    p.ip = sel.text;
    this.setState({
      pip: true
    })
  }
    
  ptarget(e:any, sel:any)
  {
    var p = this.state.product;
    p.target = sel.text;
    this.setState({
      ptarget: true
    })
  }
    
  prel(e:any, sel:any)
  {
    var p = this.state.product;
    p.relprod= sel.text; 
    this.setState({
      prel: true
    })
  }
    
  pmilli(e:any ,  b:any)
  {
    var p = this.state.product;  
    p.milli = b; 

    
    this.setState({
      pmilli: true
    })
  }
  
    
  pdate(e:any)
  {
     var p = this.state.product;
    p.date = e.target.value;
  
    this.setState({
      pdate: true
    })

  }
    
  pprac(e:any, sel:any)
  {
    var p = this.state.product;
    p.practice = sel.text;
    this.setState({
      pprac: true
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


  delete(e:any){ 
      var r = window.confirm("Are you sure");
      if (r == true) {    
    this.setState({
      disp:false,      
   })

   this.props.delete(this.state.product,this.state.product.id,this.props.flag);
      }
  }

  draft(e:any)
  {
    this.setState({
      disp:false,      
   })
   
   
   this.state.product.draft=1;
   this.props.draft(this.state.product,this.state.product.id,this.props.flag);
   
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
      if(this.props.productProp.namee!="")
      {        
        
      }
      
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
  <p>Please Enter the following information about your produuct</p>

 
<form>
  <h2 className="h1">Product Details</h2>
      <div  className="flexrow">
          <div className="flexcol"> 
          <label>Product Name<span className="red">*</span></label>
              <TextField placeholder="Enter the product name" autoComplete="off" className="input" defaultValue={this.props.productProp.namee}  onChange={this.pname.bind(this)}/>
              <p id="name_error">{this.state.nameerror}</p>
 
          </div>
          <div className="flexcol"> 
          <label>Product Type<span className="red">*</span></label>
          <Dropdown placeholder="Product" onChange={this.ptype.bind(this)}
           className="input" options={this.props.options} defaultSelectedKey={type}/>
           <p id="type_error">{this.state.typeerror}</p>
          </div>
      </div>
      <div  className="flexrow">
          <div className="flexcol"> 
          <label>Discipline<span className="red">*</span></label> 
          <ComboBox   placeholder="Select relevant discipline" onChange={this.pdis.bind(this)}
   useComboBoxAsMenuWidth={ true } 
   options={this.props.options} defaultSelectedKey={discipline}
 className="input"/>
 <p id="dis_error">{this.state.disciplineerror}</p>
 
          </div>
          <div className="flexcol"> 
          <label>Products Sponsor<span className="red">*</span></label> 
          <Dropdown
            placeholder="Select Product's practice"  onChange={this.pspon.bind(this)}
            multiSelect
            defaultSelectedKeys={sponsor}  
            options={this.props.options} className="input"/>
            <p id="sponsor_error" className="error">{this.state.sponsorerror}</p> 
          </div>
          </div>
          <h2 className="h1">Product Information</h2>
          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Product Description<span className="red">*</span></label> 
          <TextField   multiline rows={4} className="input" placeholder="Describe product in few words" defaultValue={this.props.productProp.desc} onChange={this.pdesc.bind(this)} />
          <p id="desc_error" className="error">{this.state.descerror}</p>
          </div>
          <div className="flexcol">
          <label>Product Scope<span className="red">*</span></label>
          <TextField multiline rows={4}  className="input" placeholder="Enter Product Scope" defaultValue={this.props.productProp.scope} onChange={this.pscope.bind(this)} />
          <p id="scope_error" className="error">{this.state.scopeerror}</p>
          </div>
          </div>

          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Target Market</label> 
          <Dropdown placeholder="Enter Industry to which its targeted"
           onChange={this.ptarget.bind(this)} 
           options={this.props.options} defaultSelectedKey={target} className="input" />
 
          </div>
          <div className="flexcol"> 
          <label>Related Products</label>
          <Dropdown onChange={this.prel.bind(this)} 
            placeholder="Select Products realted to this one"  
            options={this.props.options} defaultSelectedKey={relprod}
          className="input"/>
          </div>
          </div>
   
          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Does the product overlap with Existing Miliman's product</label>
          <Toggle className="input" onText="On" offText="Off" defaultChecked={this.props.productProp.milli} onChange={this.pmilli.bind(this)}/>
 
          </div>
          <div className="flexcol"> 
          <label>Ip source</label>
          <Dropdown  
             placeholder="Select Ip source" options={this.props.options} defaultSelectedKey={ip}   onChange={this.pip.bind(this)}
           className="input"/>
          </div>
          </div>

          <div  className="flexrow">
          <div className="flexcol"> 
          <label>Select a date</label>
          <input type="date" className="inputdate" onChange={this.pdate.bind(this)} defaultValue={this.props.productProp.date}></input>      
          </div>
          <div className="flexcol"> 
          <label>Select the Other Practices involved</label>
          <Dropdown  onChange={this.pprac.bind(this)}
             placeholder="Select the Other Practices involved"  
          options={this.props.options} defaultSelectedKey={practice} className="input"/>
          </div>
          </div>

          { this.props.productProp.namee=="" || this.props.productProp.namee==null ? 
          <div className="flexrow"> 
          <PrimaryButton text={'Submit'} id="submit" onClick={this.submitUpdate.bind(this)}/>
          <PrimaryButton text={'Save As Draft'}  id="Draft" onClick={this.draft.bind(this)}/> 
          </div>:
           <div className="flexrow">
           <PrimaryButton text={'Update'} id="update" onClick={this.submitUpdate.bind(this)}/>
           <PrimaryButton text={'Delete'} id="delete" onClick={this.delete.bind(this)} />
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
        disp:true,
      })
         

    }


    
}

export default Form



