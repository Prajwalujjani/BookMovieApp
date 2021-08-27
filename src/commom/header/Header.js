import React from 'react'
import "./Header.css"
import ReactLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import MaterialTabs from './MaterialTabs';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

function Header() {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div>
                <div className="header">
                    <img className="logo rotate linear infinite" src={ReactLogo} alt='' />
                    <Button variant="contained" className="btnLogin" onClick={() => { openModal() }} >Login</Button>
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}>
                            <MaterialTabs/>
                    </Modal>
                </div>

            </div>
        </div>
    )
}
ReactDOM.render(<Header />,document.getElementById('root') );

export default Header













