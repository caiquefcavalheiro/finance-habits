import GlobalStyle from "./style/global.js";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
