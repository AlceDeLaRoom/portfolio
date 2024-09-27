import picture from '../assets/portrait.jpg'

function Home() {
    return (
        <div id='home' className='flex flex-wrap text-white font-mono pt-24'>
            <div className='lg:w-96 lg:h-96 w-80 h-80 mb-12 m-auto rounded-full bg-gradient-to-b from-transparent to-purple-900 p-0.5'>
                <img src={picture} alt="Décombe Alice, web developer" className='rounded-full size-[99%] ml-0.5 mt-0.5'/>
            </div>
            <div className='text-center m-auto'>
                <h1 className='text-6xl font-bold uppercase mb-8'>Décombe Alice</h1>
                <h2 className='text-4xl font-semibold text-teal-200'>Web Developer<span className='animate-pulse'>_</span></h2>
            </div>
        </div>
    )
}

export default Home