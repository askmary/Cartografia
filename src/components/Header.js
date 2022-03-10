import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url("https://s1.1zoom.me/big0/705/433578-Kycb.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: white;
  padding: 18vh 0 0 5vw;
`;
function Header() {
  return (
    <Banner>
      <Title>Cartografia</Title>
    </Banner>
  );
}
export default Header;
