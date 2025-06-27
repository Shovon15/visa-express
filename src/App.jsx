import { Toaster } from "react-hot-toast";
import ScrollButton from "./components/button/ScrollButton";
import MainRoutes from "./routes/mainRoutes/MainRoutes";
function App() {
  return (
    <>
      <MainRoutes />
      <ScrollButton />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
