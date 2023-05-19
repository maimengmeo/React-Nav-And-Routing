import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && <Modal />}
        </div>
    );
}
export default ModalPage;

// parent owns state to keep track of whether modal should be displayed
// parent component can show a modal at any time for any reason, not only when clicking the button
