import SectionTitle from '@/components/reuseable/SectionTitle';
import Image from 'next/image';
import MisterDesignData from '../utils/misterDesignData';

const MisterDesign = () => {
  return (
    <div className="pt-10 container mx-auto px-2">
      <SectionTitle>MiSTER DESigN AdVANTAgES</SectionTitle>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 lg:pt-14">
        {MisterDesignData?.map((mister) => (
          <div key={Math.random()} className="space-y-5">
            <div className="h-24 w-24 flex justify-center items-center rounded-full bg-light-primary relative mx-auto">
              <Image
                src={mister?.icon}
                alt={mister.title}
                height={50}
                width={50}
              />
            </div>
            <h4 className="text-center text-xl md:text-2xl 2xl:text-3xl">
              {mister.title}
            </h4>
            <p className="text-gray-600 leading-7 md:leading-9 text-center px-5 xs:px-2  sm:px-8 lg:px-2">
              {mister.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MisterDesign;
