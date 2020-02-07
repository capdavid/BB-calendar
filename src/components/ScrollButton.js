import styled from "@emotion/styled";

const ScrollButton = styled.button`
  padding: 0.2rem 0.3rem;
  background: #fff;
  border: 1px solid #bbb;
  position: absolute;
  top: 1.15rem;
  right: ${props => (props.left ? "" : "0")};
  font-weight: bold;
  outline: none;
  z-index: 2;
  cursor: pointer;
`;

export default ScrollButton;
