import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  margin-top: 2rem;
  background-color: #282c34;
  color: white;
`;

function App() {
  return (
    <div>
      <i className="fa fa-bicycle"></i>
      <Div> Hello </Div>
    </div>
  );
}

export default App;
