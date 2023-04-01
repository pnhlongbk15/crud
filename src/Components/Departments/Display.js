import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addDepartment, callForm, deleteDepartment } from '../../Redux/slice/departmentSlice';
import { fetchRoute } from '../../Routes/fetchRoute';

const Display = () => {
    const { departments, isCallForm } = useSelector(state => state.department);
    const dispatch = useDispatch();

    const [department, setDepartment] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setDepartment({
            "id": "1",
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    const handleCancel = () => {
        dispatch(callForm(false));
    }
    const handleAdd = () => {
        dispatch(addDepartment(department));
        dispatch(callForm(false));
    }

    const handleRemove = (e) => {
        dispatch(deleteDepartment(e.currentTarget.id));
    }


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Employees</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {departments.length && departments.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i}</td>
                            <td>{e.name}</td>
                            <td><Link to={`${e.name}/employees`}>Click here.</Link></td>
                            <td>
                                <button id={e.id} onClick={handleRemove}>Remove</button>
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
                                <label htmlFor='name' >Name:</label>
                            </div>
                            <div className='inputs'>
                                <input id='name' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='buttons'>
                            <button onClick={handleAdd}>Add</button>
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
        width: 50%;
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
            height: 40%;
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