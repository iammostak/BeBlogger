import { Container } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";

function App() {
   return (
      <Container maxW={"container"} p={0} m={0} className="App">
         <AllRoutes />
      </Container>
   );
}

export default App;
