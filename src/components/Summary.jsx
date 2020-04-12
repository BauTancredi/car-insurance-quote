import React from "react";
import styled from "@emotion/styled";
import { firstCapitalLetter } from "../helper";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || plan === "" || year === "") return null;

  return (
    <SummaryContainer>
      <h2>Quote Summary</h2>
      <ul>
        <li>Brand: {firstCapitalLetter(brand)} </li>
        <li>Year: {year} </li>
        <li>Plan: {firstCapitalLetter(plan)}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
