const DomainList = [
    {
        name: 'COM',
        price: '6.19'
    },
    {
        name: 'NET',
        price: '4.19'
    },
    {
        name: 'INFO',
        price: '2.19'
    },
    {
        name: 'ORG',
        price: '3.19'
    }
]

const DomainSearch = () => {
    return (
        <div className='pt-12 md:pt-20 pb-16'>
            <div className='w-[90%] p-6 rounded-2xl bg-blue-700 mx-auto'>
                {/* heading */}
                <h1 className='text-center text-white font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-wider'>
                    A Domain That Stands Tall on a BillBoard.
                </h1>
                <div className='relative flex items-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-12 rounded-full h-12 md:h-16 bg-white'>
                    {/* Search input */}
                    <input type="text" placeholder='Register a Domain name'
                        className='placeholder:text-xs w-4/6 sm:w-4/55 h-full bg-transparent pl-4 pr-8 sm:px-8 outline-none'
                    />
                    {/* button */}
                    <button className='absolute block right-4 py-2 font-semibold hover:bg-rose-700 transition-all duration-300 px-2 bg-blue-900 text-white text-xs sm:text-sm md:text-base rounded-full'>
                        Search Domain
                    </button>
                </div>
                {/* compare list */}
                <div className='w-11/12 md:w-9/12 mt-8 mb-4 grid mx-auto items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12'>
                    <p className='text-white font-semibold text-sm md:text-lg'>Compare</p>
                    {
                        DomainList.map((domain, index) => (
                            <div key={index} className='text-white'>
                                <span className='text-base md:text-xl text-yellow-400 font-bold underline'>
                                    .{domain.name}
                                </span>
                                <span className="font-bold text-base">
                                    ${domain.price}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DomainSearch