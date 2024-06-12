import { FaR } from "react-icons/fa6";

export default function Prompt(){


    function myFunction() {
        var x = document.getElementById("overlay");
        if (x.style.display === '') {
            x.style.display = "none";
            }
        }


    return(

        <div className="overlay" id="overlay">
            <div className="prompt-main">
                <img src="src/assets/onepiece.png" className="prompt-img"/>
                
                <h1 className='prompt-logo-text'>kizarusearch</h1>
                <h1 className='text-2xl text-white pb-5 font-VT323 text-center'>Terms of Use</h1>
                
                <hr className="border-2 w-120 pb-5 "/>


                <div> 
                    <a><button onClick={myFunction} className='prompt-button'><div> <h1> YES </h1> </div> </button></a>
                    <a href="https://www.fbi.gov/"> <button className='prompt-button'> <div> <h1> NO </h1> </div> </button></a>
                    

                </div>

            </div>
        </div>
    
    );

}