const BACKGROUND_MODAL = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '12px',
}

const MODAL_CLOSE = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    backgroundColor: 'red',
    position: 'absolute',
    top: '-20px',
    right: '-18px'
}

export default function Modal({isOpen, setCloseModal, children}) {
    if(isOpen) {
        return(
            <div style={BACKGROUND_MODAL}>
                <div style={MODAL_STYLE}>
                    <div>
                        {children}
                    </div>
                    <button style={MODAL_CLOSE} onClick={setCloseModal}>x</button>
                </div>
            </div>
        )
    }

    return null
}