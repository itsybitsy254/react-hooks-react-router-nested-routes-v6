import App from "./App"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/profile/:id",
            element: <UserProfile />
          }
        ]
      }, 
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      }
    ]
  }
];

export default routes;