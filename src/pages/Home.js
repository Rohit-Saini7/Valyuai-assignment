import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { assignValue } from "../redux/valueSlice";

function Home() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  function handleClick() {
    let num = Math.floor(Math.random() * 15);
    setValue(num);
    if (num > 10) {
      dispatch(assignValue(num));
      alert("Target achived");
    }
  }
  return (
    <div>
      {value > 10 && <Redirect to="/result" />}
      <Container>
        <InnerContainer>
          <Paragraph>Value is : {value}</Paragraph>
          <StyledButton onClick={handleClick}>Randomize</StyledButton>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default Home;

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

const Paragraph = styled.p`
  margin: 5px;
  margin-right: 2rem;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  background: linear-gradient(to right, red, yellow);
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 20px;
  color: #fff;
  transition: ease 2s;
  &:hover {
    background: linear-gradient(to right, gray, red);
  }
  &:active {
    background: linear-gradient(to right, #00ffe0, #e900ff);
  }
`;
