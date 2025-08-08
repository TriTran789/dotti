import { useRoutes } from "react-router";
import Home from "./components/Home.tsx";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);
};

export default App;
