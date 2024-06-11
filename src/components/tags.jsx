export default function TagDisplay(val){
    return(
       
        <button> <h1> {val.val[0].toUpperCase() + val.val.slice(1)} </h1> </button>
    );
  
}