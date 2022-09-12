import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/scss/main.scss";
import Index from "./views/Index";
import TermsAndConditions from "./views/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import { Config } from "./utils/config"
import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
    <React.StrictMode>
      <DAppProvider config={Config.DAppConfig}>
          <BrowserRouter>
                <ScrollToTop />
                  <Routes>
                      <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
                      <Route path="/" element={<Index/>}/>
                  </Routes>
          </BrowserRouter>
      </DAppProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

