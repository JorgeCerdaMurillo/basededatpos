import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, {useState,useEffect} from 'react';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEu-LP9D7bEgYsxksBmr9Kf4vi7nuB-5I",
  authDomain: "practica1-968ab.firebaseapp.com",
  projectId: "practica1-968ab",
  storageBucket: "practica1-968ab.appspot.com",
  messagingSenderId: "1017609278811",
  appId: "1:1017609278811:web:d99c59cbdf0a87e37db67e",
  measurementId: "G-VZL7BXDW15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const db_prod = collection(db, 'productos');
// Get a list of cities from your database
const App = () => {
  const [productos, setProducts] = useState([])

  const fetchProducts = async() => {
    const data = await getDocs(db_prod);
    data.docs.forEach(doc => {
      setProducts([...productos,doc.data()])
    })
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
  return(
    <div className="App">
      {
        productos.map((dat)=>(
          <p>{dat.nombre}</p>
        ))
  
      }
    </div>
  );

}

export default App;





