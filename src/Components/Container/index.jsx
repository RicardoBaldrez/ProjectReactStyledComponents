import React from "react";

import styled from 'styled-components';

import Title from "../Title";
import Account from "../Account";
import Extract from '../Extract';

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Title>Olá Fulano!</Title>
      <Content>
        <Account />
        <Extract />
      </Content>
    </Container>
  );
};
