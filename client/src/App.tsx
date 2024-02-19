// import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import ModalEdit from "../components/ModalEdit";
import Note from "../components/Note";
import Notepad from "../components/Notepad";
export default function App() {
  // const [showModal, setModal] = useState(false);

  // function handleModal() {
  //   setModal(true);
  // }

  return (
    <div>
      <Header />
      <Notepad />
      <Note />
      <Footer />
      {/* <ModalEdit visible={showModal}/> */}
    </div>
  );
}
