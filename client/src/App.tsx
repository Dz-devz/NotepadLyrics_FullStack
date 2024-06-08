import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Note from "./components/Note";
import Notepad from "./components/Notepad";

const queryClient = new QueryClient();

export default function App() {
  function Layout() {
    return (
      <div>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "notes",
          element: <Note />,
        },
        {
          path: "create",
          element: <Notepad />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
