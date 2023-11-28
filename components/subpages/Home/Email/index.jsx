import Button from '@/components/reuseable/Button';
import { useForm } from 'react-hook-form';

const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div className="bg-light-primary py-20 px-5 lg:px-12">
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:grid grid-cols-2 2xl:grid-cols-3 gap-20 items-center"
        >
          <p className="text-center lg:text-left text-xl sm:text-2xl mx-auto lg:ml-0 md:w-[500px] ">
            Stay up to date! We send out a newsletter twice a week with our
            latest news.
          </p>
          <div className="flex justify-center lg:justify-start mt-5 flex-wrap gap-5  2xl:col-span-2">
            <div className="relative">
              <input
                placeholder="Email Address"
                className="border rounded-full px-8 py-3 md:w-96"
                {...register('exampleRequired', { required: true })}
              />

              {errors.exampleRequired && (
                <p className="text-red-600 absolute top-14  left-5">
                  This field is required
                </p>
              )}
            </div>

            <div className="mt-5 sm:mt-0 lg:mt-5 xl:mt-0">
              <Button
                className="!text-sm !py-3.5 border border-tan"
                type="submit"
              >
                SEND ME SOME MAGIC
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Email;
