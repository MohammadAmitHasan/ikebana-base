import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import newOnlineData from '../utils/newOnlineData';

const NewOnline = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mx-auto max-w-[240px] xs:max-w-[288px] lg:max-w-full">
      <div className="relative mt-3">
        {/* Custom Buttons */}
        <div className="absolute top-[37%] z-50 my-auto cursor-pointer">
          <button
            ref={prevRef}
            button="button"
            className="flex w-full cursor-pointer justify-center bg-[#b06b5da6] text-xl font-bold text-white md:text-2xl 2xl:text-3xl"
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-[37%] right-0 z-50 flex cursor-pointer justify-center">
          <button
            ref={nextRef}
            button="button"
            className="flex w-full cursor-pointer justify-center bg-[#b06b5da6] text-xl font-bold text-white md:text-2xl 2xl:text-3xl"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          navigation={true}
          slidesPerView="auto"
          spaceBetween={25}
          breakpoints={{
            120: {
              slidesPerView: 3,
              spaceBetween: 7,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 13,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
          }}
          modules={[Navigation]}
          className="h-full w-full"
        >
          {newOnlineData?.map((photo) => (
            <SwiperSlide key={Math.random()}>
              <div className="relative aspect-[100/110] h-full cursor-pointer">
                Hasan
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default NewOnline;
