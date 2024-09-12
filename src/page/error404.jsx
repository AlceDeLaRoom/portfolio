import { Link } from 'react-router-dom'

function Error404() {
    return (
        <main id="error404" className='w-full h-screen 
                bg-image-gradient-170deg from-purple-950 via-black via-80% to-slate-700 
                text-center text-teal-100 text-xl'>
            <h1 className='text-9xl py-32'>404</h1>
            <p className='py-4'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='text-indigo-300 hover:text-indigo-50'>Retourner sur la page d'acceuil</Link>
        </main>
    );
}

export default Error404;