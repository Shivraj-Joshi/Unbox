import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // progressStyle={{ background: "red" }}
      />
      {/* changes */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
