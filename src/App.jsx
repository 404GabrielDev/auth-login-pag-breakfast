import Header from "./components/navbar/header";
import Main from "./components/Main/main";
import Footer from "./components/footer/footer";
import Pagelogin from "./components/login/login";
import { Routes, Route } from "react-router";

function App() {
  return (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Header />
                <Pagelogin />
                <Footer />
              </>
            }
          />
        </Routes>
  );
}

export default App;
