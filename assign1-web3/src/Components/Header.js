import { useState } from "react";
import { Modal } from "react-bootstrap"

function Header (props) {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true)
    }
    
    const handleClose = () => {
        setShowModal(false)
    }
    const returnToHome = () => {
        props.setIsBrowse()
    }

    return(
        <span className="flex justify-between pb-5 bg-white bg-opacity-30 mb-5 pt-5">
            <img src="./icons/clapperboard-solid.svg" className="object-scale-down max-h-16 pl-3"></img>
            <div>
                <button className="p-5 rounded-full text-white hover:bg-white hover:text-black mr-5" onClick={returnToHome}>Home</button>
                <button className="p-5 rounded-full text-white hover:bg-white hover:text-black" onClick={handleShow}>About</button>
            </div>
            <Modal className="fixed w-screen  top-0 left-50 right-0 " show={showModal} closeButton>
                <div className="flex justify-center h-screen items-center bg-blur bg-white bg-opacity-80">
                    <ul>
                    <li><p>Made by Shreshth Kumar (201668841)</p></li>
                    <li><a className="hover:text-blue-300" href="https://github.com/Shreshthk1/Assignment_1_Web3">Github Repo</a></li>
                    <li className="cursor-pointer" onClick={handleClose}>Close</li>
                    </ul>
                </div>
            </Modal>
        </span>
    )
}
export default Header