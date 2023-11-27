import Image from 'next/image';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import newOnlineData from '../utils/newOnlineData';

const NewOnline = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mx-auto my-16 md:my-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center md:mb-10">
        NEW ONLiNE
      </h1>
      <div className="relative mt-3">
        {/* Custom Buttons */}
        <div className="absolute top-[37%] z-50 my-auto cursor-pointer px-2">
          <button
            ref={prevRef}
            button="button"
            className="flex w-full cursor-pointer justify-center text-xl font-bold hover:bg-tan rounded-full p-2"
          >
            <FaArrowLeftLong />
          </button>
        </div>
        <div className="absolute top-[37%]  z-50 flex cursor-pointer justify-center right-0">
          <button
            ref={nextRef}
            button="button"
            className="flex w-full cursor-pointer justify-center text-xl font-bold hover:bg-tan rounded-full p-2"
          >
            <FaArrowRightLong />
          </button>
        </div>

        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation={true}
          slidesPerView="auto"
          spaceBetween={25}
          breakpoints={{
            120: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 13,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          modules={[Navigation]}
          className="h-full w-full"
        >
          {newOnlineData?.map((onlineData) => (
            <SwiperSlide
              key={Math.random()}
              className="text-center hover:shadow-xl mb-10 p-5 rounded-lg"
            >
              <div className="relative aspect-[3/4] w-9/12 mx-auto">
                <Image
                  src={onlineData?.image}
                  alt="type"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-medium">{onlineData?.name}</h4>
                <h5 className="uppercase text-gray-400 font-medium">
                  {onlineData?.brand}
                </h5>
                <h5>&euro; {onlineData?.price}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default NewOnline;
