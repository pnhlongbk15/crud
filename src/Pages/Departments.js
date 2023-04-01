import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Display from '../Components/Departments/Display';
import Employees from '../Components/Departments/Employees';
import { callForm } from '../Redux/slice/departmentSlice';


const Departments = () => {
  const dispatch = useDispatch();
  const DepartmentRouter = [
    {
      path: '/',
      element: <Display
      />
    },
    {
      path: '/:department/employees',
      element: <Employees
      />
    }

  ]

  const handleAdd = () => {
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
        {DepartmentRouter.map((route, i) => {
          return (
            <Route key={i} {...route} />
          )
        })}
      </Routes>
    </Container>
  )
}

export default Departments

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