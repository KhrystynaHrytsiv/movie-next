const Search = () => {

    return (
        <div>
        <form method={'GET'} action={'/movies'} className="flex gap-2">
            <input type={'text'} name={'query'} placeholder={'Search...'}  className="border px-2"/>
            <button type={'submit'}>Search</button>
        </form>
        </div>

    );
};

export default Search;