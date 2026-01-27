import { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the search submission logic here
        console.log('Searching for:', query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub users..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;