import {useState} from "react";
import './Modal.css';

const Modal= ({btnText, title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={()=>{setIsOpen(true)}} className='open'>{btnText}</button>
            {isOpen && (
                <div className='cover'>
                    <div className='modal-cont'>
                        <div className='header'>
                            {title}
                            <button onClick={()=>{setIsOpen(false)}} className='close'>X</button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
