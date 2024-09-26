import PortfolioItem from "./portfolioItem";


function SlideButtons(params) {
    const {project, handleModal} = params;

    return (
    <button onClick={() => handleModal(project.id)} 
                className='aspect-video max-h-52 sm:mx-2'>
        <PortfolioItem  name={project.name} image={project.image} />
    </button>)
}

export default SlideButtons;