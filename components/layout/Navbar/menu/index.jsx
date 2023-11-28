import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { LuShoppingBag } from 'react-icons/lu';
import { MdFavoriteBorder } from 'react-icons/md';

const Menu = () => {
  return (
    <div className="space-y-2 lg:space-y-0 lg:flex lg:space-x-7 xl:space-x-10 py-3 lg:py-0 bg-[#FAEED1] lg:bg-primary rounded border-gray-400 border-opacity-60 lg:border-0 border">
      <a href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
        <AiOutlineSearch />
        <span>SEARCH</span>
      </a>
      <a href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
        <MdFavoriteBorder />
        <span>WISHLIST</span>
      </a>
      <a href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
        <FiUser />
        <span>ACCOUNT</span>
      </a>
      <a href={'/'} className="flex items-center space-x-1 px-4 lg:px-0">
        <LuShoppingBag />
        <span>CART</span>
      </a>
    </div>
  );
};
export default Menu;
