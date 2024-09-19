import { useState } from 'react';
import PortfolioItem from '../components/portfolioItem';
import Modal from '../components/modal';
import projects from '../data/projects.json';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Portfolio() {
    const [activeCard, updateActiveCard] = useState(0);
    const [activeDot, updateActiveDot] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(0);


    const handleModal = (id) => {
        setShowModal(true);
        setUpdateModal(id-1);
    }

    const handleNext = () => {
        updateActiveCard((activeCard + 3) >  projects.length - 1 ? 0 : activeCard + 3);
        updateActiveDot((activeDot + 3) > projects.length - 1 ? 0 : activeDot + 3);
    }

    const handlePrevious = () => {
        updateActiveCard(activeCard === 0 ? projects.length - 1 : activeCard - 3);
        updateActiveDot(activeDot === 0 ? projects.length - 1 : activeDot - 3);
    }
    
    const handleDot = (index) => {
        updateActiveCard(index);
        updateActiveDot(index);
    }

    const handleChildData = (data) => {
        setShowModal(data);
    };

    const arrowSize = 100;



    return (
        <div id="portfolio" className='text-white text-center py-12 mb-24'>
            <div className={showModal? "block": "hidden"} >
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
                    aria-hidden="true">
                </div>
                    <Modal project={projects[updateModal]} sendDataToParent={handleChildData}/>
                </div>
            </div> 

            <h2 className='my-32 text-5xl font-bold uppercase text-teal-100'>Portfolio</h2>

            <div id="slidePortfolio" className='m-auto flex justify-between items-center 
                                                bg-gradient-to-r from-transparent via-indigo-700 to-*'>
                <button onClick={handlePrevious} className='transition duration-200 opacity-80
                                    hover:opacity-100 text-8xl font-bold text-gray-300' aria-hidden="true" > 
                    <ArrowBackIosIcon sx={{ fontSize: arrowSize }}></ArrowBackIosIcon>
                </button>
                
                <div className='flex justify-center'>
                    {projects.slice(activeCard, activeCard + 3).map((project) => (
                        <button onClick={() => handleModal(project.id)} key={project.id} aria-hidden="true" >
                            <PortfolioItem  name={project.name} image={project.image} />
                        </button>
                    ))}
                </div>
                
                <button onClick={handleNext} className='transition duration-200 opacity-80 
                                    hover:opacity-100 text-8xl font-bold text-gray-300'>
                    <ArrowForwardIosIcon sx={{ fontSize: arrowSize }}></ArrowForwardIosIcon>
                </button>
            </div>

            <div id="boutonPortfolio"  className='flex justify-center mt-4 py-5'>
                {projects.map((project, index) => (
                    (project.id - 1) % 3 === 0 && 
                    <button key={project.id} onClick={() => handleDot(index)} aria-hidden="true" 
                        className={`size-4 rounded-full mx-2 
                            ${activeDot === index ? 
                                'bg-teal-100 shadow-inner shadow-slate-100 cursor-default' : 
                                'hover:bg-gray-600 shadow-inner hover:shadow-purple-500 shadow-gray-800 bg-purple-500 transition duration-200'
                            }`
                        }>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

