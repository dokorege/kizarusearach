import { FaBookOpen, FaBook, FaDiscord, FaHeart} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";


export default function AppBar(){ 

    return(
            <div className="AppBar"> 
                    <div className="nav-space">
                        <FaHeart className="heart-icon" size={24} /> 
                        <FaDiscord className="discord-icon" size={25} />
                        <FaBookOpen className="book-icon" size={25}/> 
                    </div>


                    <div className="nav-space">
                        <FaMagnifyingGlass className="heart-icon" size={25}/> 
                        <IoSettingsOutline className="settings-icon" size={25}/> 
                        <CgProfile className="book-icon" size={25}/> 

                    </div>
  
            </div>
    ); 

}