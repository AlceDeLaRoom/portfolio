// ajouter des images à chaque projets
import CloseIcon from '@mui/icons-material/Close';

function Modal({ project, sendDataToParent }) {

    const sendData = () => {
        sendDataToParent(false);
    }

    return (
        <>
            
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center text-center items-center">
                    
                    <div id="modalWindow" 
                        className="relative transform overflow-hidden rounded-3xl 
                                    bg-image-gradient-170deg from-indigo-950 via-purple-950 via-80% to-slate-700
                                    transition-all w-2/3 p-4">
                        <button onClick={sendData} className='absolute top-4 right-4 text-gray-300 hover:text-white'>
                            <CloseIcon  fontSize="large"  />
                        </button>
                        <div className="bg-gray-800 
                                        px-4 pb-4 pt-5 p-6 rounded-2xl
                                        text-teal-100">
                            <div className="flex flex-col">
                                <h2 className="text-4xl font-semibold mb-8">{project.name}</h2>
                                <img src={project.image} alt="project" className="w-2/3 m-auto" />
                                <div className="flex flex-wrap justify-center mt-2">
                                    {project.tag.map((tag) => (
                                        <div key={tag} className="text-lg mr-4 my-0.5 rounded-full px-4 py-1
                                                                border-2 border-indigo-600
                                                                bg-gradient-to-r via-indigo-600 via-65% to-gray-800">
                                            <p>{tag}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg">{project.description}</p>
                                <p className="text-lg mt-2">{project.problematique}</p>
                                <a href={project.urlGit} className="mt-4 text-lg text-indigo-300 hover:text-indigo-50">
                                    lien Github
                                </a>
                                <a href={project.urlDemo} className="text-lg text-indigo-300 hover:text-indigo-50">
                                    lien du projet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
