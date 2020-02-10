import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';
import SmurfDisplay from './SmurfDisplay';

const SmurfList = () => {
    const { addSmurf } = useContext(SmurfContext);
    
    return (
        <div>
            <h1>Current Members</h1>
            {addSmurf.map(person => {
                return <SmurfDisplay key={person.id} person={person}  />
            })}
                
        </div>
    )
}

export default SmurfList;
