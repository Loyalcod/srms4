import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './pages/CreateClass/createClass.css'
import { AuthProvider } from './auth/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
    <AuthProvider>
     <Routes>
        <Route path='/*' element={<App/>} />    
      </Routes>
      </AuthProvider>
    </BrowserRouter>   

);


