import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home';
//import { About } from "";

export const routes = (
    <>
        <Route path="/" element={<Home />} />
        {/*  <Route path="/about" element={<About />} />*/}
    </>
);