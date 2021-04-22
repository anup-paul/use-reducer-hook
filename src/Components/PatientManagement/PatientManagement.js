import React, { useReducer, useRef } from 'react';
import { patientInitialState, patientReducer } from '../Reducer/Reducer';

const PatientManagement = () => {

    const nameRef = useRef();

    const [state, dispatch] = useReducer(patientReducer, patientInitialState);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(nameRef.current.value);

        dispatch({
            type:'ADD_PATIENT',
            id:state.patients.length+1,
            name:nameRef.current.value
        })
        nameRef.current.value=" ";
    }

    return (
        <div>
            <h1>Patient ManageMent:{state.patients.length}</h1>

            <form onSubmit={handleSubmit} >
                <input ref={nameRef} ></input>
            </form>
            {
                state.patients.map(pt=><li
                 key={pt.id}>

                {pt.name}
                <button onClick={()=>dispatch({type:'REMOVE_PATIENT', id:pt.id})} > Delete</button>
                
                </li>)
            }
        </div>
    );
};

export default PatientManagement;