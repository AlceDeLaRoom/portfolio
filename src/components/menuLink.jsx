

function MenuLink({text,url}){
    return(
        <a href={url}
            className="my-2 text-center font-bold text-lg rounded
                        bg bg-gradient-to-r from-purple-950 via-purple-800  to-purple-950 
                        text-teal-100 transform
                        hover:via-indigo-700 hover:text-teal-200">
            <p className="block cursor-pointer my-2"
                >{text}</p>
        </a>
    )
}

export default MenuLink