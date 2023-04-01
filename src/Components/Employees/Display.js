import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addEmployee, callForm, updateEmployee } from '../../Redux/slice/employeeSlice';


const Display = () => {
    const dispatch = useDispatch();
    const { employees, isCallForm } = useSelector(state => state.employee);
    const [emp, setEmp] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        setEmp(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }
    const handleEdit = (event) => {
        event.preventDefault();
        let value = employees.filter(e => e.id === event.currentTarget.id)[0];
        setEmp(value);
        dispatch(callForm(true));
    }

    const handleSave = (event) => {
        event.preventDefault();
        emp.id ?
            dispatch(updateEmployee(emp)) :
            dispatch(addEmployee(emp));

        dispatch(callForm(false));
        setEmp({});
    }
    const handleCancel = () => {
        dispatch(callForm(false));
        setEmp({});
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Department</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {employees?.length && employees.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i}</td>
                            <td>{e.firstName}</td>
                            <td>{e.email}</td>
                            <td>{e.phoneNumber}</td>
                            <td>{e.departmentName}</td>
                            <td>
                                <button id={e.id} onClick={handleEdit}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isCallForm && (
                <div className='update'>
                    <div className='box'>
                        <div className='field'>
                            <div className='labels'>
                                <label htmlFor='firstName' >FirstName:</label>
                                <label htmlFor='email'>Email:</label>
                                <label htmlFor='phoneNumber'>Phone:</label>
                                <label htmlFor='departmentName'>Department:</label>
                            </div>
                            <form className='inputs' onChange={handleChange}>
                                <input id='firstName' defaultValue={emp.firstName} />
                                <input id='email' defaultValue={emp.email} />
                                <input id='phoneNumber' defaultValue={emp.phoneNumber} />
                                <input id='departmentName' defaultValue={emp.departmentName} />
                            </form>
                        </div>
                        <div className='buttons'>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default Display

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
            td:ntd-child(1){
                flex-basis: calc(90vw/10);
            }
            td:ntd-last-child(){
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

    .update {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(1,1,1,0.3);

        .box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 35%;
            height: 80%;
            background-color: white;
            padding: 50px 50px 20px;

            .field {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 50px;
                
                .labels,.inputs {
                    display:flex;
                    flex-direction: column;
                    gap: 50px;
                }
                .labels > label {
                    padding: 5px;
                }
                .inputs > input {
                    outline: none;  
                    padding: 5px;
                }
            }
            .buttons {
                align-self: flex-end;
                >button {
                    margin-left: 20px;
                    padding: 5px 10px;
                }
            }
        }
        
    }
`