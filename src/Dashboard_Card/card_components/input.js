import React from "react";
import styled from "@emotion/styled";

const InputCode = () => {
  const ContainerforInput = styled.div`
    border-radius: 15px;
    width: 10%;
    height: 10%;
    background-color: "red";
  `;

  const Input = styled.input`
    width: 100%;
    height: 100%;
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <ContainerforInput>
      <form>
        <Input />
        <button type="submit">Search</button>
        <button>Cancel</button>
      </form>
    </ContainerforInput>
  );
};

export default InputCode;
