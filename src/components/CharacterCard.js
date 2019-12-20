import React from "react";
import styled from 'styled-components';

const CharacterCard = props => {
  const Card = styled.div`
  min-width: 200px;
  max-width: 250px;
  background: rgba(20, 255, 20);
  border-radius: 10px;
  margin: 5%;
  padding: 1%;
  `;
  return( 
      <Card className="char-card">
        <h2>{props.name}</h2>
        <h3>{props.status}</h3>
        <h3>{props.species}</h3>
      </Card>
          );
}


export default CharacterCard;
