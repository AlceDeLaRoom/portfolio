
function PortfolioItem(params) {
    return (
        <div className='relative opacity-70 transition
                        hover:opacity-100 hover:scale-110
                        z-0 hover:z-10' >
            <img src={params.image} alt={params.name} className='object-cover rounded-lg'/>
            <div className="absolute w-full bottom-0 bg-gradient-to-t from-gray-950 to-transparent rounded-b-lg">
                <h3 className='lg:text-2xl text-xl text-center font-semibold text-teal-100'>{params.name}</h3>
            </div>
        </div>
    );
}

export default PortfolioItem;