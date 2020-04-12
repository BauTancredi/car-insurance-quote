import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { obtainYearDifference, calculateBrand, obtainPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);
  const { brand, year, plan } = data;

  const obtainData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    let result = 2000;

    const difference = obtainYearDifference(year);

    result -= (difference * 3 * result) / 100;

    result = calculateBrand(brand) * result;

    result = parseFloat(obtainPlan(plan) * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSummary({
        quotation: Number(result),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>All fields are mandatory</Error> : null}
      <Field>
        <Label> Brand </Label>
        <Select name="brand" value={brand} onChange={obtainData}>
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label> Year </Label>
        <Select name="year" value={year} onChange={obtainData}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={obtainData}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={obtainData}
        />
        Full
      </Field>
      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
