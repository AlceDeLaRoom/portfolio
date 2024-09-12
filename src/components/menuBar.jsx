import MenuLink from './menuLink'

function MenuBar() {
    const listSection = [{
        id: 1,
        text: 'Acceuil',
        url: '#home'},{
        id: 2,
        text: 'Profil',
        url: '#profil'},{
        id: 3,
        text: 'Compétences',
        url: '#skills'},{
        id: 4,
        text: 'Portfolio',
        url: '#portfolio'},{
        id: 5,
        text: 'Contact',
        url: '#contact'}
    ]

    return (
        <div id='navigation'
            className='fixed top-0 right-0 w-52 h-full
                        flex flex-col justify-center pr-2 pl-7
                        bg-gradient-to-r from-indigo-800 to-15% to-gray-950'> 
            {listSection.map((item) => (
                <MenuLink key={item.id} text={item.text} url={item.url} />
            ))
            }
        </div>
    )
}

export default MenuBar;