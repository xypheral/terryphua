const Landing = () => {
    return (
        <div className="relative bg-white h-screen flex flex-col justify-between">

            <div className="absolute left-6 top-36 bottom-6 w-1 bg-gradient-to-b from-pink-400 to-violet-600">
                <p className="text-lg font-bold transform -rotate-90 absolute top-[-50px] left-[-20px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-800">TPCH</p>
            </div>

            <div className="absolute right-6 top-6 bottom-36 w-1 translate-y-14 bg-gradient-to-b from-violet-600 to-pink-400">
                <p className="text-lg font-bold transform rotate-90 absolute bottom-[-50px] right-[-21px] whitespace-nowrap  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-800">TPCH</p>
            </div>

            <div className="w-full h-24 mt-20 flex justify-between">
                <p className="text-2xl mt-3 ml-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-400">TERRY</p>
            </div>

            <div className="w-full h-100 mb-24 flex items-center justify-center">
                <p className="text-6xl font-bold text-black">
                    <span className="block">Welcome to</span>
                    <span className="inline">my </span>
                    <span className="relative inline-block">
                    Portfolio
                    <span className="absolute h-[0.08em] bottom-0 inset-x-0 bg-gradient-to-r from-violet-500 to-pink-500"></span>
                    </span>
                </p>
            </div>

            <div className="w-full h-100 mb-8 flex justify-end">
                <p className="text-2xl mt-3 mr-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-800">PHUA</p>
            </div>

        </div>
    );
};

export default Landing;
