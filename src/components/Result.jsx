import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "@emotion/styled";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const Text = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQuotation = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quotation }) => {
  return quotation === 0 ? (
    <Message>Choose brand, year and plan</Message>
  ) : (
    <ResultQuotation>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Text>The total amount is: ${quotation}</Text>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuotation>
  );
};

export default Result;
