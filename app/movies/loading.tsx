const Loading = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-6 bg-black text-white'>
            <div className='w-24 h-24 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin'/>
            <h2 className='text-3xl font-semibold tracking-wide'>
                Loading movies...
            </h2>

        </div>
    );
};
export default Loading;