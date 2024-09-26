import { useState } from 'react';
import SlideButtons from '../components/slideButtons';
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



    function Slides() {
        if (activeCard+3 > projects.length) 
        {
            return(projects.slice(- 3).map((project) => (
                <SlideButtons key={project.id} project={project} handleModal={handleModal}/>)
            )
        )
        } else {
            return (
                projects.slice(activeCard, activeCard + 3).map((project) => (
                    <SlideButtons key={project.id} project={project} handleModal={handleModal}/>)
                )
            )
        }
    }

    return (
        <div id="portfolio" className='text-white text-center pt-24'>
            <div className={showModal? "block": "hidden"} >
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
                    aria-hidden="true">
                </div>
                    <Modal project={projects[updateModal]} sendDataToParent={handleChildData}/>
                </div>
            </div> 

            <h2 className='mt-12 mb-16 text-5xl font-bold uppercase text-teal-100'>Portfolio</h2>

            <div id="slidePortfolio" className='m-auto flex justify-around h-max-52
                                                font-bold text-gray-300
                                                bg-gradient-to-r from-transparent via-indigo-700 to-*'>
                
                <button onClick={handlePrevious} 
                        className='transition duration-200 opacity-80 hover:opacity-100 
                                    sm:px-4'> 
                    <ArrowBackIosIcon className='lg:text-8xl sm:text-6xl text-8xl lg:-mr-10 sm:-mr-8 -mr-6'/>
                </button>

                <div className='flex sm:flex-row flex-col'>
                    <Slides/>    
                </div>
                
                <button onClick={handleNext} className='transition duration-200 opacity-80 hover:opacity-100'>
                    <ArrowForwardIosIcon className='lg:text-8xl sm:text-6xl text-8xl sm:mr-0 -mr-6'/>
                </button>
                
            </div>

            <div id="boutonPortfolio"  className='justify-center mt-4 py-5 sm:flex hidden'>
                {projects.map((project, index) => (
                    (project.id - 1) % 3 === 0 && 
                    <button aria-label="other projects" key={project.id} onClick={() => handleDot(index)} aria-hidden="true"
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

/*
<button onClick={handlePrevious} className='transition duration-200 opacity-80 hover:opacity-100 '> 
                    <ArrowBackIosIcon className='lg:text-8xl text-6xl'/>
                </button>


<button onClick={handleNext} className='transition duration-200 opacity-80 hover:opacity-100'>
                    <ArrowForwardIosIcon className='lg:text-8xl text-6xl'/>
                </button>

*/