import Home from "../section/home";
import Contact from '../section/contact';
import Profil from '../section/profil';
import Portfolio from '../section/portfolio';
//import Services from '../section/services';
import Skills from '../section/skills';
import Navigation from '../components/navigation';


function Main() {
    return (
        <main id="main" className=" lg:pr-52 min-w-80
                bg-image-gradient-170deg from-purple-950 via-black via-80% to-slate-700">
            <Navigation />
            <div className="max-w-5xl m-auto">
                <Home />
                <Profil />
                <Skills />
                <Portfolio />
                <Contact /> 
            </div>
        </main>
    );
}

export default Main;