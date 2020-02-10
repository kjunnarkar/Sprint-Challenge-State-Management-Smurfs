import React, { useContext } from 'react';
import styled from 'styled-components';
import SmurfContext from '../contexts/SmurfContext';
import Axios from 'axios';

// styled-components
const Card = styled.div `
  border: solid black 2px;
  margin: 50px 250px 50px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Name = styled.h1 `
  color: yellow;
  font-weight: bold;
`;

const Info = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;

const DeleteButton = styled.button `
    margin-left: 20%;
`
// end styled-components

const SmurfDisplay = ({ person }) => {
    
    const { addSmurf, setAddSmurf } = useContext(SmurfContext);

    const handleDelete = id => {
        Axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            setAddSmurf(addSmurf.filter(member => member.id !== id))
        })
    }

    return (
        <Card>
            <Info>
                <Name>Name: {person.name}</Name>
                <ListItems>Age: {person.age}</ListItems>
                <ListItems>Height: {person.height}</ListItems>
            </Info>
            <DeleteButton onClick={() => handleDelete(person.id)}>Remove Member</DeleteButton>
        </Card>
    )
}

export default SmurfDisplay;
