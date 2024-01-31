import React from 'react';
import { NotilicationText } from '../styledComponents/Notilication.styled';

const Notilication = ({ message }) => {
  return (
    <>
      <NotilicationText>{message}</NotilicationText>
    </>
  );
};

export default Notilication;