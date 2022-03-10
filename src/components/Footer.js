import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #58641d;
`;

const P1 = styled.p`
  font-size: 2rem;
  padding: 6vh 0 3vh 3vw;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

function Footer() {
  return (
    <Container>
      <P1>Feito por Mariana Melo</P1>
    </Container>
  );
}

export default Footer;
