import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";

const Menu = () => {
  return <div className="space-y-2 lg:space-y-0 lg:flex lg:space-x-7 xl:space-x-10 py-3 lg:py-0 bg-[#FAEED1] lg:bg-primary rounded border-gray-400 border-opacity-60 lg:border-0 border">
    <Link href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
        <AiOutlineSearch />
        <span>
          SEARCH
        </span>
    </Link>
      <Link href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
      <MdFavoriteBorder />
        <span>
        WISHLIST
        </span>
      </Link>
      <Link href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
      <FiUser />
        <span>
        ACCOUNT
        </span>
      </Link>
      <Link href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
      <LuShoppingBag />
        <span>
        CART
        </span>
      </Link>
  </div>;
};
export default Menu;