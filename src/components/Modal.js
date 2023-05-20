import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    //when the model is showed, user wont be able to scroll
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            //clean up function
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    //with this create portal, the modal is sent to position that we want which is the div inside of body tag in index page.
    //so it wont be affected by the other positioned parent which make absolute wont work as expected
    return ReactDOM.createPortal(
        <div>
            <div
                className="fixed inset-0 bg-gray-300 opacity-80"
                onClick={onClose}
            ></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;
