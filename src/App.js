import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { data, quotation } = summary;

  return (
    <Container>
      <Header title="Car insurance quote" />;
      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        {!loading ? <Summary data={data} /> : null}
        {!loading ? <Result quotation={quotation} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
