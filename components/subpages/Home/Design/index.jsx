import Button from '@/components/reuseable/Button';
import Image from 'next/image';

const Design = () => {
  return (
    <div className="container mx-auto bg-light-primary py-14 md:py-20 px-5">
      <div className="flex justify-center space-x-5 items-center mb-14">
        <Button className="!py-3">OUR COLLECTION</Button>
        <span className="text-gray-500 font-bold">FROM OVER 100 BRANDS</span>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-4 md:mb-8 ">
        DESiGN FURNiTURE AT MiSTERDESiGN
      </h1>
      <div className="w-10 h-0.5 mx-auto bg-tan"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:mt-14 mt-4">
        <p className="leading-7 md:leading-9 text-justify xl:ml-28 md:px-10 xl:mr-14 xl:mt-24 order-2 lg:order-1">
          <b>Design lamps</b>, the finest <b>design furniture</b> such as{' '}
          <b>dining tables</b> and <b>dining room chairs</b> can be found at
          Mister Design. First-class design articles of the finest design brands
          from home and abroad. Also for <b>design garden furniture</b> and
          <b>design accessories</b> you have come to the right place at
          MisterDesign. A large part of our total range of designer furniture,
          lighting and home accessories can be found in the webshop.
        </p>
        <div className="order-1 lg:order-2 mb-5">
          <div className="lg:absolute">
            <div className="relative w-full sm:w-96 mx-auto lg:w-[450px] xl:w-[550px] aspect-square">
              <Image src={'/images/design.png'} alt="design" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Design;
