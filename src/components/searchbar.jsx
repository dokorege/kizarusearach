import { FaCirclePlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Axios from 'axios';
import TagDisplay from "./tags";

let count = null

export default function Searchbar({ onTagsSelected }) {
    const [tags, setTags] = useState([]);
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const [pendingTags, setPendingTags] = useState([]);

    const fetchTags = async (query) => {
        let tagsList = [];
        let encodedQuery = encodeURIComponent(query);
        let tagsURL = `https://api.rule34.xxx/autocomplete.php?q=${encodedQuery}`;
        await Axios.get(tagsURL, { format: "json" }).then((res) => {
            for (let step = 0; step < res.data.length; step++) {
                let tag = decodeURIComponent(res.data[step]['value']);
                tagsList.push(tag);
            }
            setTags(tagsList);
        });
    };

    useEffect(() => {
        fetchTags(query);
    }, [query]);

    const handleInputChange = (event) => {
        const userInput = event.target.value.replace(/ /g, '_');
        setQuery(userInput);
    };

    const handleTagClick = (tag) => {
        if (!selectedTags.includes(tag)) {
            const newSelectedTags = [...selectedTags, tag];
            setSelectedTags(newSelectedTags);
            setPendingTags(newSelectedTags);
        }
    };

    const handleSearch = () => {
        onTagsSelected(pendingTags);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 100);
    };



    return (
        

        
        <div onLoad={handleSearch} className="main-searchbar container mx-auto p-4">

            


            <img className='logo' src="src/assets/onepiece.png" />
            <h1 className='logo-text'>kizarusearch</h1>

            <div className='searchbar_logo'>
                <div className="flex flex-row">
                    <div className='left-48'> &nbsp; </div>
                    <button className=""> <FaCirclePlus size={25} /></button>
                    <input
                        className="searchbar"
                        placeholder="Search Tags Here"
                        value={query}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleBlur}
                    />
                </div>

                {isFocused && (
                    <div className="tag-display">
                        {tags.map((tag, index) => (
                            <div key={index} onClick={() => handleTagClick(tag)}>
                                <TagDisplay val={tag} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <button className="searchMe" onLoad={handleSearch} onClick={handleSearch}>
                <div>Search</div>
            </button>

            <div className="selected-tags bg-black p-4 mt-4 flex flex-wrap w-full">
                {selectedTags.map((tag, index) => (
                    <div key={index} className="selected-tag text-white p-2 m-1 bg-purple-1000 rounded">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}
