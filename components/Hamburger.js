import { useState } from 'react';
import Image from 'next/image';
import ContactSVG from './ContactSVG';

const HamburgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        className="lg:hidden"
        onClick={() => {
          setActive(!active);
        }}>
        <Image src="/menuicon.svg" alt="me" width="25px" height="25px" />
      </div>
      {active && (
        <ul className="absolute right-0 top-[80px] bg-white w-screen flex-col shadow-lg shadow-black-20/5 p-[20px] lg:hidden">
          <li className="mb-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
            SERVICES
          </li>
          <li className="my-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
            ABOUT US
          </li>
          <li className="my-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
            GET IN TOUCH
          </li>
          <li className="my-[15px] w-full flex justify-center items-center px-[15px] py-[5px] bg-[#0D0D0D] font-gothic rounded hover:cursor-pointer hover:bg-[#272727] transition-colors">
            <p className="m-0 p-0 font-gothic font-[16px] font-bold text-white pr-[8px]">CALL US</p>
            <ContactSVG width="12px" height="12px" fill="white" />
          </li>
        </ul>
      )}
    </>
  );
};
export default HamburgerMenu;
