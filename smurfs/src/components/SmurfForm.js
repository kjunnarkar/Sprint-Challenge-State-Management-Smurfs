import React, { useState, useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';
import axios from 'axios';
import styled from 'styled-components';

// styled-components
const FormHeading = styled.h2 `
    margin-top: 40px;
    margin-bottom: 20px;
`;

const FormSetup = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const EnterInput = styled.input `
    margin-top: 20px;
    margin-bottom: 20px;
`;

const SubmitButton = styled.button `
    margin-top: 30px;
`;
// end styled-components

const SmurfForm = () => {
    const { addSmurf, setAddSmurf } = useContext(SmurfContext);
    
    const [newSmurf, setNewSmurf] = useState(
        {
            name: '',
            age: '',
            height: '',
            id: Math.random()
        }
    );

    const handleChange = event => {

        setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
    };

    console.log('this is newSmurf after handle change', newSmurf);

    const submitForm = (event) => {
        //event.preventDefault();
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('this is post response', res);
            setNewSmurf({
                name: '',
                age: '',
                height: ''
            })
            setAddSmurf([...addSmurf, res.data])
        })        
    };

    return (
        <div>
            <FormHeading>Enter New Smurf Information</FormHeading>
            <FormSetup onSubmit={submitForm}>
                <label htmlFor='name'>Name</label>
                <EnterInput
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    onChange={handleChange}
                    value={newSmurf.name}
                />
                <label htmlFor='age'>Age</label>
                <EnterInput
                    id='age'
                    type='text'
                    name='age'
                    placeholder='Enter Age'
                    onChange={handleChange}
                    value={newSmurf.age}
                />
                <label htmlFor='height'>Height</label>
                <EnterInput
                    id='height'
                    type='text'
                    name='height'
                    placeholder='Enter Height'
                    onChange={handleChange}
                    value={newSmurf.height}
                />
                <SubmitButton type='submit'>Submit</SubmitButton>
            </FormSetup>
        </div>
    )
}

export default SmurfForm;
