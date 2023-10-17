import Hero from "./Hero";

const SearchView = ({keyboard,searchResults}) => {
    console.log(keyboard)

    const title = `You are searching for ${keyboard}`
    return(
        <>
        <Hero text={title}/>
        </>
    );
};

export default SearchView;