import styled from '@emotion/styled';

export const Label = styled.label`
display: flex;
flex-direction: column;
   align-items: center;
`;

export const Input = styled.input`
margin-left:10px;
`;

export const Button = styled.button`
display: block;
margin: auto;
margin-top: 20px;
border: none;
padding: 5px;
border-radius: 5px;
  &:hover {
        color: green;
          border: 1px solid green;
          padding: 4px;
      }
`;