import styled from "styled-components";

const StyledLogo = styled.header`
  width: 10%;
  height: auto;
  margin: 1rem auto;
`;

const Logo = () => (
  <StyledLogo>
    <h1>Decentragram</h1>
  </StyledLogo>
);

export default Logo;
