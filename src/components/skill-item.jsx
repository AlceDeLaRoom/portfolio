

function Skill(params) {

    const radius = 33
    const circumference = 2 * Math.PI * radius
    const strokeWidth = 5

    return (
        
    
        <div className="flex items-center max-w-md pr-5 jus 
                        text-teal-100 bg-gradient-to-r from-indigo-600 via-indigo-600 to-transparent
                        shadow-xl rounded-s-full rounded-r-3xl h-20 w-72 mx-4 my-3">
            <div className="flex items-center justify-center -m-6 overflow-hidden 
                            bg-inherit rounded-full">
                <svg className="w-32 h-32 transform translate-x-1 translate-y-1">
                    <circle
                        className="text-purple-950"
                        strokeWidth={strokeWidth * 1.8}
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="60"
                        cy="60"
                        />
                    <circle
                        className="text-teal-300"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - params.level * circumference/100}
                        transform='rotate(-90 60 60)'
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="60"
                        cy="60"
                        />
                </svg>
                <span className="absolute text-2xl">{params.level}%</span>
            </div>
            <img src={params.logo} alt={params.name} className="w-12 h-12"/>
            <h3 className="ml-2 font-bold sm:text-xl">{params.name}</h3>
        </div>

        
    );


    
}

export default Skill;


/*        <div className="justify-between flex flex-col py-2" >
            <div className="bg-gradient-to-t from-gray-950 via-teal-100 via-70% to-gray-200 h-7 rounded-full border-2 border-purple-600">
                <div className={"bg-gradient-to-r from-indigo-800 to-indigo-950 h-full w-[" + params.level + "] rounded-full"} >
                    <h4 className="ml-3 text-left font-medium text-teal-100">{params.name}</h4>
                </div>
            </div>
        </div> */