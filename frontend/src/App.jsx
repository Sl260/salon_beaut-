import "./App.css";
import Footer from "./components/footer/Footer";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;
