import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos
      reservados.
    </FooterContainer>
  );
};
