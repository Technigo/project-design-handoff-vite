import iphone from "/images/iPhone.png";
import appStore from "/icons/appleplay.svg";
import googleStore from "/icons/googleplay.svg";
import { Scroll2 } from "./Scroll";
export const MidSection = () => {
  return (
    <section className="border-2  border-blue-500 w-full relative h-[80vh] flex flex-col gap-6">
      <div className="flex flex-row border-2  border-pink-500 z-0">
        <img
          src={iphone}
          alt="iphone image"
          className="rotate-[-3.8deg] w-[70%] border-2 border-blue-500"
        />
        <div className="text-[18px] border-2 border-red-500 z-10 absolute left-[35%] font-normal leading-normal break-normal mr-3">
          <p className="border-2 border-red-500 w-[80%] mt-3">
            Different levels tailored to your needs
          </p>
          <p className="border-2 border-red-500 w-[80%] ml-[2rem] mt-2">
            Low impact sessions ranging from 15-45 minutes
          </p>
          <p className="border-2 border-red-500 w-[80%]  ml-[4rem] mt-2">
            Certified instructors teaching you the fundamentals of Pilates
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center border-2 border-black">
        <div className="border-2 border-black w-[60%] pl-4">
          <h className="text-[28px]   ">
            Unlock <strong className="italic">100+</strong> <br />
            <strong className="italic">classes </strong>and <br />
            start{" "}
            <strong className="italic">
              moving <br />
              on the move
            </strong>
          </h>
        </div>
        <div className="flex flex-col gap-5 w-[40%] items-center">
          <img src={appStore} alt="App store" className="w-[80%]" />
          <img src={googleStore} alt="Google store" className="w-[80%]" />
        </div>
      </div>
      <Scroll2 />
    </section>
  );
};
