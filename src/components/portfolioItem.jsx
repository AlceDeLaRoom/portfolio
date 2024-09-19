

function PortfolioItem(params) {
    console.log(params);
    return (
        <div className='relative bg-inherit flex flex-col items-center px-5 opacity-70 transition
                        hover:opacity-100 hover:scale-110 h-52' >
            <img src={params.image} alt={params.name} className='w-full object-cover rounded-lg shadow-lg mb-auto h-full'   />
            <div className="absolute bottom-0  w-full bg-gradient-to-t from-gray-950 to-transparent rounded-b-lg">
                <h3 className='text-2xl font-semibold text-teal-100'>{params.name}</h3>
            </div>
        </div>
    );
}

export default PortfolioItem;