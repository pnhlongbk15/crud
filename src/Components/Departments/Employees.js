import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { displayEmployee } from '../../Redux/slice/departmentSlice';

const Employees = () => {
    const dispatch = useDispatch()
    const { department } = useParams();
    const { employees } = useSelector(state => state.department);

    useEffect(() => {
        dispatch(displayEmployee(department))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {employees.length && employees.map((e, i) => (

                        <tr>
                            <td>{i}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.phoneNumber}</td>
                            <td>
                                <button id={e.id} >Edit</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Employees

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;

    table {
        width: 90%;
        border: 1px solid black;
        tr {
            display: flex;
            border: 1px solid black;
            padding: 10px 0;
            td:nth-child(1){
                flex-basis: calc(90vw/10);
            }
            td:nth-last-child(){
                flex-basis: calc(90vw/10);
            }
            td {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                flex-basis: calc(90vw*(1/5));
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: clip;
            }
        }
    }
`