'use client';
import Button from '@/components/reuseable/Button';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CategoriesItems from '../utils/CategoriesItems';
import demoItems from '../utils/demoItems';

const Categories = () => {
  const [selectedItem, setSelectedItem] = useState(CategoriesItems[0]?.name);

  return (
    <div className="px-5">
      <div className="flex justify-center">
        {/* Categories Menus */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {CategoriesItems.map((category) => (
            <div
              key={category.name}
              className={`flex items-center space-x-2 cursor-pointer lg:justify-center ${
                selectedItem === category.name ? 'selected' : ''
              }`}
              onClick={() => setSelectedItem(category.name)}
            >
              <span>{category.icon}</span>
              <span className="uppercase text-sm">{category.name}</span>

              <span>
                {selectedItem === category.name ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 pt-10 container mx-auto">
        {demoItems?.[selectedItem].map((cat) => (
          <div key={Math.random} className="rounded-lg p-3 shadow-lg space-y-2">
            <div className="relative w-full aspect-square">
              <Image
                src={cat?.image}
                alt="product image"
                fill
                className="object-fill rounded"
              />
            </div>
            <h5 className="text-xl">{cat?.name}</h5>
            <p className="text-sm 2xl:text-base text-gray-600">
              {cat?.description}
            </p>
            <h5>Price: {cat?.price}</h5>
            <Button className="!py-2 !text-sm">View</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
