import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Result() {
  const valueInStore = useSelector((state) => state.valueInStore.valueInStore);
  return (
    <div>
      <Container>
        <InnerContainer>
          Last value of variable is {valueInStore}
        </InnerContainer>
      </Container>
    </div>
  );
}

export default Result;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const InnerContainer = styled.div`
  display: flex;
  border: 5px solid;
  padding: 20px;
  position: relative;
  color: #fff;
  background: #000;
  background-clip: padding-box;
  border: solid 5px transparent;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(to right, red, orange);
  }
`;
