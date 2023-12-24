import "./App.css";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Collections />
      <Form />
      <Footer />
    </>
  );
}

export default App;
