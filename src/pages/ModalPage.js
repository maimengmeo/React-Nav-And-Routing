import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Do you accept the agreement?</p>
            {/* children */}
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                feugiat eu nisl sit amet blandit. Phasellus gravida libero ut
                ornare ullamcorper. Donec ut lacus vitae felis tincidunt
                elementum eu sit amet felis. Mauris dictum, quam ut vehicula
                accumsan, metus augue laoreet dui, vitae rutrum massa enim sit
                amet nisi. Vestibulum iaculis purus at fringilla semper. Duis
                rhoncus nisl sed massa elementum venenatis. Praesent tortor
                diam, venenatis ac mi eget, vehicula pretium sapien. Nam
                laoreet, ligula in rhoncus porta, tortor libero eleifend est,
                sed facilisis ligula nibh in sem. Pellentesque sit amet velit
                sed massa ullamcorper dapibus eget eget felis. Phasellus
                fringilla tellus ac dolor finibus pharetra. Proin lectus purus,
                sodales et elit ut, consequat aliquet nunc. Donec porttitor id
                dui elementum eleifend. Aenean quis vehicula libero. Duis in dui
                aliquam, rhoncus odio et, condimentum nibh. Duis in scelerisque
                sem, et sagittis eros. Pellentesque id lectus et odio dictum
                consectetur vitae vitae turpis. Mauris in metus neque.
                Suspendisse consequat porttitor felis quis tincidunt.
                Suspendisse iaculis porttitor lacinia. Donec fringilla orci nec
                nunc posuere semper. Nunc dignissim dictum metus, ultrices
                condimentum purus ultrices eu. Mauris efficitur consequat enim
                ac congue. Integer fermentum, sem ut congue eleifend, risus est
                rhoncus risus, ut pellentesque dui dui eu diam. Vestibulum
                accumsan, nisi vitae viverra aliquet, quam nulla iaculis dolor,
                eget ultricies nibh turpis sed justo. Cras vitae augue
                scelerisque, sollicitudin odio eu, tempus tortor. Duis iaculis
                vitae quam quis maximus. Integer nec fermentum lectus. Phasellus
                vitae maximus eros. Vestibulum viverra eu ante eu venenatis.
                Donec sed laoreet dolor. Nulla eu finibus velit. Sed sed
                molestie risus. Donec ac odio at felis aliquam semper a quis
                dui. Integer accumsan neque sit amet venenatis lacinia. Aliquam
                at varius metus, in fermentum nisl. Cras eleifend diam in neque
                fringilla, nec fringilla sapien efficitur. Nullam consequat ex
                ut tincidunt porta. Vestibulum at enim in odio ullamcorper
                egestas. Aenean arcu elit, tempus a lorem ut, pretium mollis
                quam. Curabitur egestas eleifend porta. Vivamus vel dignissim
                orci. Nunc quis dignissim ipsum. Vivamus volutpat erat quis quam
                feugiat, ut porta nisl sagittis. Vestibulum laoreet mi ex, sed
                accumsan elit congue sed. Mauris fermentum tristique semper.
                Proin lacinia at justo consequat tincidunt. Donec eleifend
                pulvinar mattis. Aenean interdum tellus vitae ex hendrerit, sed
                pretium diam sagittis. Donec iaculis, arcu at lacinia iaculis,
                diam elit vestibulum purus, sit amet tincidunt quam mi quis ex.
                Maecenas id metus in quam iaculis varius at quis neque.
            </p>
        </div>
    );
}
export default ModalPage;

// parent owns state to keep track of whether modal should be displayed
// parent component can show a modal at any time for any reason, not only when clicking the button
