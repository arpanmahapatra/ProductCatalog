import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';
import {product} from './Services/Prod';
import { initializeIcons } from '@fluentui/react';



function App() {
  useEffect(()=>{ initializeIcons()}, [])
  return (
    <div>
     <Product/>
    </div>
  );
}

export default App;
