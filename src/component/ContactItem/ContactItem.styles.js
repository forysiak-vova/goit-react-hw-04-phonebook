import styled from '@emotion/styled';

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

export const ContactName = styled.p`
display: flex;

`;

export const Button = styled.button`
      padding: 4px;
      border-radius: 4px;
      border: none;
      margin-left: 30px;
      
      &:hover {
        color: red;
        border: 1px solid red;
        padding: 2px;
      }

`;