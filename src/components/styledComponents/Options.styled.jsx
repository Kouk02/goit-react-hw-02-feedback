import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: #fff; 
  background-color: #2c2c2c; 
  border: 0.1px solid #3131313c;
  border-radius: 4px;
  transition: all 300ms;

  &:hover {
    color: #222; 
    background-color: #444; 
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:nth-child(1):hover {
    background-color: #fff; 
  }

  &:nth-child(2):hover {
    background-color: #fff; 
  }

  &:nth-child(3):hover {
    background-color: #fff; 
  }
`;

