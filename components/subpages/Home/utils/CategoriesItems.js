import { BiCabinet } from "react-icons/bi";
import { FaChair, FaGlassMartini } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { PiPottedPlant } from "react-icons/pi";

const categoriesItems = [
    {
        name: 'lighting',
        icon: <FaGlassMartini />,
    },
    {
        name: 'chairs',
        icon: <FaChair />,
    },
    {
        name: 'tables',
        icon: <MdOutlineTableRestaurant />,
    },
    {
        name: 'accessories',
        icon: <PiPottedPlant />,
    },
    {
        name: 'cabinets',
        icon: <BiCabinet />,
    },
    {
        name: 'gifts',
        icon: <IoGiftOutline />,
    },
]

export default categoriesItems;