import React from "react";
import styled from "styled-components";
import logoRizna from '../images/logo.svg'
import typeRizna from '../images/type.svg'

export const Logo = () => {
  return ( 
  <StyleALogoRizna>
    <StyleImageLogoRizna src={logoRizna} alt={'Foto Rizna logo'}/>
    <StyleImageTypeRizna src={typeRizna} alt={'Foto Rizna type'}/>
  </StyleALogoRizna>
  )
};

const StyleALogoRizna = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.63vw;
`;
const StyleImageLogoRizna = styled.img`
  width: 2.92vw;
  height: 2.92;
`;
const StyleImageTypeRizna = styled.img`
  width: 6.67vw;
  height: 1.52vw;
`;
