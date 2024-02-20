import React from "react";
import styled from "styled-components";
import { HeaderLink } from "../HeaderLink";

export const ContainerHeaderLinks = () => {
  return (
    <Container>
      <HeaderLink name="Work" />
      <HeaderLink name="Team" />
      <HeaderLink name="Contact Us" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1vw;
`;
