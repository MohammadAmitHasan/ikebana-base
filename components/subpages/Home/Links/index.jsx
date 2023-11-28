import Image from 'next/image';
import Link from 'next/link';
import { KeepInTouchData, QuickLinks } from '../utils/LinksData';

const Links = () => {
  return (
    <div className="bg-light-primary py-28 !-mt-20 px-2 sm:px-7 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        {QuickLinks?.map((quick) => (
          <div key={Math.random()} className="">
            <h3 className="mb-10 text-xl md:text-2xl">{quick?.name}</h3>
            <div className="grid grid-cols-2 gap-y-5 ">
              {quick?.links?.map((CSL) => (
                <Link
                  className="text-gray-500"
                  key={Math.random()}
                  href={CSL.link}
                >
                  {CSL.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-10">
          <div>
            <h3 className="mb-5 text-xl md:text-2xl">Keep in touch!</h3>
            <div className="flex gap-5 text-2xl text-gray-700">
              {KeepInTouchData?.map((touch) => (
                <Link key={Math.random()} href={touch?.link}>
                  {touch.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xl md:text-2xl">Payment Methods</h3>
            <Image
              src={'/images/payment.png'}
              alt="payment methods"
              width={150}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
