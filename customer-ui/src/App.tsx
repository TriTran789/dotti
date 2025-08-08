import { useRoutes } from "react-router";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);
};

export default App;
