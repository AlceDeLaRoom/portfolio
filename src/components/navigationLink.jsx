

function NavigationLink({url, icon, text}) {
    
    return(
        <a href={url}
            className="flex items-center justify-center lg:justify-start
                        my-2 mx-2 lg:mx-0 text-center
                        font-bold text-lg rounded cursor-pointer lg:w-full sm:w-2/12 h-fit w-10
                        bg bg-gradient-to-r from-transparent via-purple-600 lg:via-20%  to-transparent 
                        text-teal-100 transform
                        hover:via-indigo-200 hover:text-purple-900">
            <div className="sm:mb-1.5 sm:mx-2 mx-auto mb-1 block sm:hidden lg:block">
                {icon}
            </div>
            <p className=" my-2 hidden sm:block lg:text-lg text-sm "
                >{text}</p>
        </a>
    )
}

export default NavigationLink
/*
<a href={url}
            className="flex items-center
                        my-2 text-center 
                        font-bold text-lg rounded cursor-pointer lg:w-full sm:w-2/12 h-fit w-10
                        bg bg-gradient-to-r from-purple-950 via-purple-800  to-purple-950 
                        text-teal-100 transform
                        hover:via-indigo-700 hover:text-teal-200">
            <div className="sm:mb-2 sm:mx-2 mx-auto mb-1 block sm:hidden lg:block">
                {icon}
            </div>*/
