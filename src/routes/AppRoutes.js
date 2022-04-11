import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DynamicFormsMember } from '../pages';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DynamicFormsMember />} />
           
        </Routes>
    );
};

export default AppRoutes;