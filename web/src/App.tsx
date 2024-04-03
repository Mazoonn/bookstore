import {RouterProvider, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import router from "./routes/Routs";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppBackground = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f2f2f2;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;


const App = () => {
  return (
      <RouterProvider router={router} fallbackElement={<Fallback />} />
  );
};
function Fallback() {
  return <p>Performing initial data load</p>;
}

export default App;
