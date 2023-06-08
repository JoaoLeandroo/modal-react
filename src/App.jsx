import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="app">
      <h4>Utilizando Modal com React</h4>
      <div>
        <button onClick={() => openModal === false ? setOpenModal(true) : setOpenModal(false)}>Modal</button>
      </div>
      <Modal isOpen={openModal} setCloseModal={() => setOpenModal(!openModal)}>
        <h3>Essa é minha Modal!</h3>
      </Modal>
    </div>
  )
}

export default App
