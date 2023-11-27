import Link from 'next/link';
import { ClipLoader } from 'react-spinners';

const Button = ({
  href,
  variant = 'filled',
  isFullWidth = false,
  className = '',
  type = 'button',
  children,
  isLoading,
  loaderText = 'Loading...',
  enableLoader,
  colorDisabled,
  disabled,
  ...props
}) => {
  const finalClassName = `${
    isFullWidth ? 'flex w-full justify-center' : 'inline-flex'
  } items-center gap-x-2 px-8 py-3 lg:py-5 font-semibold rounded-full border border-primary transition-all duration-300 ${className}  ${
    !disabled ? 'active:scale-90 active:opacity-90' : ''
  } ${
    variant == 'filled'
      ? `bg-tan hover:opacity-80 text-white text-sm lg:text-base ${
          disabled || colorDisabled
            ? 'cursor-not-allowed !border-gray-400 !bg-gray-400 !text-gray-50 hover:bg-gray-400'
            : ''
        }`
      : `bg-white  hover:text-inherit ${
          disabled || colorDisabled
            ? 'cursor-not-allowed !border-gray-400 !bg-white !text-gray-400'
            : 'hover:bg-primary'
        }`
  }`;
  return enableLoader ? (
    <button
      className={finalClassName}
      type={type}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <ClipLoader size={24} /> {loaderText}
        </>
      ) : (
        children
      )}
    </button>
  ) : href ? (
    <Link href={href} className={finalClassName} {...props}>
      {children}
    </Link>
  ) : (
    <button
      className={finalClassName}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
