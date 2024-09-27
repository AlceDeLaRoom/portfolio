import CloseIcon from '@mui/icons-material/Close'

function ModalContent ({project, closeModal}) {
    const linkPropriete = "rounded-lg border-2 border-indigo-700 hover:border-teal-400 w-48 m-2 bg-gradient-to-r from-purple-800 via-black via-65% to-purple-800 text-teal-200 hover:from-indigo-800 hover:via-black hover:to-indigo-800"

    return(
        <div id="modalWindow" 
            className="relative sm:rounded-3xl sm:p-4 p-3 h-full g
                        bg-image-gradient-170deg from-indigo-800 via-purple-800 via-80% to-slate-500">
            <button  aria-label="close modal" onClick={closeModal} 
                    className='absolute top-4 right-4 text-gray-300 hover:text-white'>
                <CloseIcon  fontSize="large"  />
            </button>
            <div className="bg-gray-800 w-full h-full
                            px-4 pb-4 pt-5 p-6 sm:rounded-2xl rounded-lg
                            text-teal-100">
                <div className="flex flex-col justify-around h-full sm:mx-8 mx-2">

                    <h2 className="text-4xl font-semibold mb-4">{project.name}</h2>
                    <div className="flex flex-wrap justify-center sm:mb-8">
                        {project.tag.map((tag) => (
                            <div key={tag} className="text-lg mr-4 my-0.5 rounded-md p-1
                                                    bg-image-gradient-170deg from-indigo-800 via-purple-800 via-80% to-slate-500">
                                <div className="bg-gradient-to-r from-indigo-800 via-black via-65% to-indigo-800 px-4">
                                    <p>#{tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex sm:flex-row flex-col justify-between sm:mb-8'>
                        <img src={project.image} alt="project" className="sm:w-1/2 h-full object-contain aspect-video rounded-lg" />
                        <div className='flex flex-col mx-auto justify-between sm:w-1/3 items-center sm:my-6'>
                            <p className="text-base text-left indent-5">{project.description}</p>                           
                        </div>
                    </div>
                    <div className='flex sm:flex-row flex-col text-lg font-semibold items-center justify-center'>
                        <a href={project.urlGit} className={linkPropriete}>
                            Voir le code
                        </a>
                        <a href={project.urlDemo} className={linkPropriete}>
                            Accéder au site
                        </a>
                    </div>
                    <p className="text-base text-left indent-5 mt-2">{project.problematique}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ModalContent