import React from 'react';
import styled from 'styled-components';

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
// end styled-components

const SmurfDisplay = ({ person }) => {
    
    return (
        <Card>
            <Info>
                <Name>Name: {person.name}</Name>
                <ListItems>Age: {person.age}</ListItems>
                <ListItems>Height: {person.height}</ListItems>
            </Info>
        </Card>
    )
}

export default SmurfDisplay;
