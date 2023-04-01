import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Employees from '../Pages/Employees';
import Departments from '../Pages/Departments';
import NotFound from '../Pages/NotFound';

const Custome = [
        {
                path: '/employees/*',
                element: <Employees />
        },
        {
                path: '/departments/*',
                element: <Departments />
        },
        {
                path: '*',
                element: <NotFound />
        }

];

const CustomeRouter = () => {
        return (
                <Routes>
                        {Custome.map((route, i) => {
                                return (
                                        <Route key={i} {...route} />
                                )
                        })}
                </Routes>
        )
}

export default CustomeRouter;
