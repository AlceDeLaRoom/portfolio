// ajouter des images à chaque projets
import ModalContent from "./modalContent";

function Modal({ project, closeModal }) {
    return (
        <div className="relative z-20" >
            <div onClick={closeModal} className="fixed inset-0 bg-black opacity-50">
            </div>
            <div className="fixed sm:h-[90%] max-w-full inset-0 m-auto min-w-80 sm:aspect-square">
                <ModalContent project={project} closeModal={closeModal}/>
            </div>
        </div>
            
    )
}

export default Modal