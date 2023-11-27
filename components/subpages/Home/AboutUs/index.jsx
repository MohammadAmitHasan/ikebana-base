import Button from '@/components/reuseable/Button';
import Image from 'next/image';
import aboutUsData from '../utils/AboutUsData';

const AboutUs = () => {
  return (
    <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-3 max-w-[1920px] mx-auto gap-y-2 lg:gap-10 lg:pr-14 px-5">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 md:mb-8 ">
            AbOUT Us
          </h1>
          <p className="leading-7 md:leading-9 text-justify w-48 mx-auto">
            Our interior consultants are happy to help you! By phone, in our
            store or even on location.
          </p>
        </div>
      </div>
      <div className="col-span-2 lg:bg-secondary lg:h-[700px] xl:h-[830px] 2xl:h-[780px] relative gap-5">
        <div className="lg:absolute sm:flex lg:top-10 lg:right-10 xl:top-14 xl:right-14 2xl:right-20 2xl:top20 w-full gap-5 md:gap-10 space-y-5 sm:space-y-0">
          {aboutUsData?.map((about) => (
            <div
              key={Math.random}
              className="border border-secondary rounded px-5 py-10 xl:px-14 2xl:px-24 space-y-5 xl:space-y-10 bg-white shadow-lg"
            >
              <div className="relative w-3/4 mx-auto aspect-[4/3]">
                <Image src={about?.image} alt={about.title} fill />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                {about.title}
              </h2>
              <p className="leading-7 md:leading-9 text-justify text-gray-600">
                {about.description}
              </p>
              <Button>OUR PROJECTS</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
