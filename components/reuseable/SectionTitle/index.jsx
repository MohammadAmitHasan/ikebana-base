const SectionTitle = ({ className = '', children }) => {
  return (
    <div
      className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  text-center mb-4 md:mb-8 ${className}`}
    >
      {children}
    </div>
  );
};
export default SectionTitle;
