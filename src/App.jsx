import AppBar from "./components/appbar";
import Searchbar from "./components/searchbar";
import NoImages from "./components/noImages.jsx";
import Images from "./components/images.jsx";
import Prompt from "./components/prompt.jsx";
import { useState, useEffect } from "react";
import Axios from 'axios';


// Review code and make sure you understand the functionality 
// Create a splash screen saying 'Are you 18' 
// Add tag screen under each photo, which can be added to the array of tags in searchBar
// add lazy loading so images look nice before they load
// add documentation screen etc
// find a host kiz


function App() {
    const [img, setImg] = useState(null);
    const [tags, setTags] = useState([]);
    const [duration, setDuration] = useState(null);

    const fetchAPI = async (selectedTags) => {
        let imageLinks = [];
        let duration = [];
        const tagsQuery = selectedTags.map(tag => encodeURIComponent(tag.replace(/ /g, '_'))).join('+');
        const imageURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=26&tags=rating%3asafe+${tagsQuery}`;

        try {
            const response = await Axios.get(imageURL, { format: "xml", paymentType: "ach" });
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, "text/html");

            for (let step = 0; step <= 25; step++) {
                imageLinks.push(xmlDoc.getElementsByTagName("post")[step].getAttribute('file_url'));
                duration.push(xmlDoc.getElementsByTagName("post")[step].getAttribute('created_at'));
            }
            setImg(imageLinks);
            setDuration(duration);
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    };

    const handleSearch = (selectedTags) => {
        setTags(selectedTags);
        fetchAPI(selectedTags);
    };

    return (
        <>
        <Prompt/>
        <div className="flex flex-col h-screen bg-black items-center">
           
            <div className="flex flex-row bg-black top-0">
                <AppBar />
            </div>
            <Searchbar onTagsSelected={handleSearch} />

            <section className="images-container">
                <ol className="bg-black pb-10">
                    {img && img.map((image, index) => (
                        <Images duration={duration[index]} key={index} index={image} />
                    ))}
                </ol>

                <NoImages/>
            </section>

            
        </div>
        </>
    );
}

export default App;
