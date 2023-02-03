import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
`;

const FooterBottom = styled.div`
  padding: 10px;
  background: #14A44D;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <FooterBottom>
        Copyright © 2023 COSC4353 Group 28
      </FooterBottom>
    </Container>
  );
}