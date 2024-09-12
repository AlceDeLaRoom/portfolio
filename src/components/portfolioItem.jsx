

function PortfolioItem(params) {

    return (
        <div className='bg-inherit flex flex-col items-center px-1 opacity-70 transition
                        hover:opacity-100 hover:scale-110' >
            <img src={params.image} alt={params.name} className='w-full object-cover rounded-lg shadow-lg mb-auto' />
            <div className="absolute w-full bottom-0 bg-gradient-to-t from-gray-950 to-transparent rounded-b-lg">
                <h3 className='text-2xl font-semibold text-teal-100'>{params.name}</h3>
            </div>
        </div>
    );
}

export default PortfolioItem;