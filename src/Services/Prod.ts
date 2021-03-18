import React, { Component } from 'react'
import Product from '../Product/Product';
export class product {
        id:number;
        draft:number;
        namee: string;
        type: string;
        discipline: string;
        sponsor: [string];
        desc: string;
        scope: string; 
        target: string;
        relprod: string;
        milli: boolean;
        ip: string;
        date: string;
        practice: string;
    
    constructor(id:number,
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
        draft:number) {
            this.draft=draft
      this.id = id;
      this.namee = namee;
      this.type = type
      this.discipline =discipline
      this.sponsor = sponsor
      this.desc = desc
      this.scope = scope
      this.relprod=relprod
      this.target = target
      this.milli = milli
      this.ip = ip
      this.date = date
      this.practice = practice
      
    }
  }
  
  





