import styled from 'styled-components';

const Container = styled.div`
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  background-color: #60666ad1;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: tomato;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  margin: 15px;
  width: 300px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: aquamarine;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 5px 15px;
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export { Container, Input, Title, List, Item, Button };
