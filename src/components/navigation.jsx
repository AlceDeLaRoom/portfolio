import NavigationLink from './navigationLink'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import MailIcon from '@mui/icons-material/Mail';

function MenuBar() {
    const listSection = [{
        id: 1,
        text: 'Accueil',
        url: '#home',
        icon: <HomeIcon/>},{
        id: 2,
        text: 'Profil',
        url: '#profil',
        icon: <Person2Icon/>},{
        id: 3,
        text: 'Compétences',
        url: '#skills',
        icon: <SettingsIcon/>},{
        id: 4,
        text: 'Portfolio',
        url: '#portfolio',
        icon: <FolderCopyIcon/>},{
        id: 5,
        text: 'Contact',
        url: '#contact',
        icon: <MailIcon/>}
    ]

    return (
        <div id='navigation'
            className='fixed lg:right-0 bottom-0 lg:w-52 lg:h-screen w-screen lg:min-w-fit min-w-80 h-12 z-20
                        flex lg:flex-col flex-row justify-center sm:justify-around lg:justify-center lg:pr-2 lg:pl-7
                        lg:bg-gradient-to-r bg-gradient-to-b from-indigo-800 to-15% to-gray-950'> 
            {listSection.map((item) => (
                <NavigationLink key={item.id} text={item.text} url={item.url} icon={item.icon} />
            ))
            }
        </div>
    )
}

export default MenuBar;