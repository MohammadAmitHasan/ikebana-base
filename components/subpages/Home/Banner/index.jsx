import Button from '@/components/reuseable/Button';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-primary mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-14 max-w-7xl mx-auto">
        <div className="flex items-center py-6 w-full">
          <div className="max-w-lg">
            <h6 className="md:text-xl font-bold">THE FRITZ HANSEN</h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5 mb-7">
              IKEbANA VASE
            </h2>
            <p className="leading-7 md:leading-9 lg:text-justify mb-8">
              This special vase is named after the Japanese word for flower
              arrangement, Ikebana. It is designed to honor and admire the
              entire flower, including the stem.
            </p>
            <Button>SEE COLLECTION</Button>
          </div>
        </div>

        <div className="h-[500px] lg:h-[600px] hidden md:block">
          <div className="absolute">
            <div className="relative w-96 lg:w-[520px] xl:w-[650px] aspect-square">
              <Image src={'/images/hero.png'} alt="flower bas" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
