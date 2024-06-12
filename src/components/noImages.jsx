import AppBar from "./appbar";


export default function NoImages(){

    function scrollToTop() {
        let a = document.getElementById('AppBar')
        a.scrollIntoView()
    }

    return (

        <div className="noLoad"> 
            <img src="src/assets/luffy.png" className="noLoadImage" />
            <h1 className="noLoadText"> ALL RESULTS FOUND !</h1>
            
            <div className="noLoadButtons"> 
                <button className='noLoadButton' onClick={scrollToTop} ><div> <h1> BACK TO TOP? </h1> </div> </button>
                <button className='noLoadButton '> <div> <h1> RESET TAGS </h1> </div> </button>
            </div> 
            
        </div>


    );
};