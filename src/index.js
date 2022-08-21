import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import "./css/Main.css";
import Loader from './Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppJs = lazy(()=> import('./App'));
const LoginJs = lazy(()=> import('./Components/Login/Login'));
root.render(
<BrowserRouter>
<Suspense fallback={<Loader/>}>
 <Routes>
 <Route path="/" element={<AppJs />} />
      <Route path="login" element={<LoginJs />} />
    </Routes>
     </Suspense>
 </BrowserRouter>
);

