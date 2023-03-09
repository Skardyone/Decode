import Image from 'next/image';
import React from 'react'
import Modal from "react-modal"
import Logo from "../../assets/design/decode_final_bile.png"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#212139",
    border: "solid",
    borderColor:"#50A983",
    borderRadius: "2px",
    padding: "20px",
    maxWidth: "500px",
    width: "80%",
  },
};

type KontaktProps = {
  isOpen: boolean;
  onClose: () => void;
}

const Kontakt: React.FC<KontaktProps> = ({ isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="text-white text-[1rem] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image src={Logo} alt=""className='max-w-[80%]'/>
        <div className="text p-5">
          <p>+420 607 407 625</p>
          <p>decoderockplzen@gmail.com</p>
        </div>        
      </div>
    </Modal>
  )
}

export default Kontakt