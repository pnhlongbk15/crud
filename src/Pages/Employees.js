import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Display from '../Components/Employees/Display';
import { callForm } from '../Redux/slice/employeeSlice';
import { fetchRoute } from '../Routes/fetchRoute';



const Employees = () => {
  const dispatch = useDispatch();

  const EmployeesRouter = [
    {
      path: '/',
      element: <Display
      />,
    }
  ];

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(callForm(true));
  }


  return (
    <Container>
      <header>
        <div></div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </header>
      <Routes>
        {EmployeesRouter.map((route, i) => {
          return (
            <Route key={i} {...route} />
          )
        })}
      </Routes>
    </Container>
  )
}

export default Employees

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  > header{
    display: flex;
    justify-content: space-between;

    div > button {
      margin: 20px;
      padding: 10px;
    }
  }
`