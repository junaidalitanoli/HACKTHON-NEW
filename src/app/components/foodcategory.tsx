import React from 'react'
import Image from 'next/image'; // Importing Next.js Image component

const FoodCategory1 = () => {
  return (
    <div className="min-h-screen md:max-w-[1920px] w-full flex flex-col items-center justify-center bg-[#0D0D0D] px-6 pt-16 md:px-16 lg:px-24 space-y-8">
      {/* Section Heading */}
      <div className="text-center sm:mt-24 mt-[44rem] md:mt-20 space-y-4">
        {/* Subheading */}
        <p className="font-greatvibes text-[16px] md:text-[18px] font-normal text-[#FF9F0D]"> 
          Food Category
        </p>
        {/* Main Heading */}
        <h2 className="font-helvetica text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#FFFFFF]">
          <span className='text-[#FF9F0D]'>Ch</span>oose Food Item
        </h2>
      </div>

      {/* Grid Section */}
      <div className="w-full grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 px-28 gap-6 lg:grid-cols-4 items-center justify-center">
        {/* Image 1 */}
        <div className="flex items-center w-full justify-center">
          <Image
            src="/images/f1.png" // Correct path relative to public folder
            alt="Partner 1"      // Alt text
            width={306}          // Fixed width
            height={329}         // Fixed height
            className="w-full object-cover h-auto" // Tailwind classes
          />
        </div>
        {/* Image 2 */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/f2.png" // Correct path relative to public folder
            alt="Partner 2"
            width={306}
            height={329}
            className="w-full object-cover h-auto"
          />
        </div>
        {/* Image 3 */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/f3.png"
            alt="Partner 3"
            width={306}
            height={329}
            className="w-full object-cover h-auto"
          />
        </div>
        {/* Image 4 */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/f4.png"
            alt="Partner 4"
            width={306}
            height={329}
            className="w-full object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory1;
