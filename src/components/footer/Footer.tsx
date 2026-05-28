const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 text-white mt-10 border-t border-gray-700'>
            <div className='w-4/5 m-auto py-6 flex justify-between items-start'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-bold'>TMDb</h2>
                    <p className='text-gray-400 w-[400px] leading-relaxed'>Discover popular movies, explore trailers, ratings and detailed information about your favorite films.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-semibold'>Technologies</h3>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <p>Next.js</p>
                        <p>TypeScript</p>
                        <p>Rest API</p>
                        <p>Tailwind</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-semibold'>Contacts</h3>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <p>Email: khrystyna.hrytsiv@gmail.com</p>
                        <p>Phone: +38 (063) 653 15 45</p>
                        <p>Lviv, Ukraine</p>
                    </div>
                </div>

            </div>
            <div className='border-t border-gray-700 py-6 text-center text-gray-500'>© 2026 MovieApp. Powered by TMDB.</div>

        </footer>
    );
};

export default Footer;