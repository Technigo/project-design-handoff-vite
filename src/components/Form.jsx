import rectangle from "/images/Rectangle.png";
import yoga3 from "/images/yoga3.png";
export const Form = () => {
  return (
    <section className="lg:flex lg:flex-row lg:mx-10">
      <img
        src={yoga3}
        alt="yoga picture"
        className="max-lg:hidden w-[40vw] lg:mb-[-14rem]"
      />
      <section className="relative my-12 mx-6 text-persian-blue  md:w-[80%] md:ml-[10%]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${rectangle})`,
            backgroundSize: "cover",
          }}
        />

        <form className="relative z-10 py-8 px-10  lg:text-[26px]">
          <h2 className="text-xl font-bold mb-4 lg:text-[32px]">CONTACT US</h2>
          <div className="mb-4 ">
            <label htmlFor="name" className="block font-medium">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NAMEL"
              className="w-[80%] mt-3 p-2 border  border-persian-blue bg-transparent rounded-full focus:outline-none placeholder:text-bold "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-MAIL"
              className="w-[80%]  mt-3 p-[0.5rem] border border-persian-blue bg-transparent rounded-full focus:outline-none placeholder:text-bold"
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="relative w-[80%]">
              <label htmlFor="message" className="block font-medium">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="2"
                placeholder="MESSAGE"
                className="w-full h-[3rem] mt-3  border border-persian-blue bg-transparent rounded-full  focus:outline-none placeholder:text-bold placeholder:pl-2 placeholder:pt-3 placeholder:text-xl  overflow-hidden"
              />
            </div>
            <a href="#" role="button" aria-label="Click Me" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="62"
                viewBox="0 0 68 62"
                fill="none"
                className="w-[33px] md:w-[42px] absolute right-10 bottom-3"
              >
                <path
                  d="M65.7333 2.06672L67.8187 2.88098C67.9981 2.50105 68.0484 2.08076 67.963 1.67448C67.8776 1.26821 67.6604 0.894649 67.3396 0.60214C67.0188 0.309631 66.6091 0.111635 66.1635 0.0337694C65.7179 -0.0440961 65.257 0.00175295 64.8403 0.165384L65.7333 2.06672ZM2.26665 26.8667L1.37359 24.9654C0.989173 25.1151 0.657672 25.3589 0.415736 25.6698C0.1738 25.9806 0.0308543 26.3464 0.00270429 26.7267C-0.0254457 27.1069 0.0622964 27.4869 0.256229 27.8246C0.450162 28.1622 0.742731 28.4444 1.10159 28.6399L2.26665 26.8667ZM38.5333 59.9334L36.5885 60.9956C36.8029 61.3228 37.1124 61.5896 37.4828 61.7664C37.8531 61.9432 38.2698 62.0232 38.6869 61.9976C39.104 61.9719 39.5052 61.8416 39.8461 61.621C40.187 61.4004 40.4544 61.0981 40.6187 60.7476L38.5333 59.9334ZM64.8403 0.165384L1.37359 24.9654L3.15972 28.768L66.6264 3.96805L64.8403 0.165384ZM1.10159 28.6399L23.7683 41.0441L26.0984 37.4976L3.43172 25.0977L1.10159 28.6399ZM22.984 40.329L36.584 60.9956L40.4736 58.8711L26.8736 38.2044L22.984 40.329ZM40.6141 60.7476L67.8141 2.88098L63.6435 1.25245L36.4435 59.1191L40.6141 60.7476ZM64.1285 0.607651L23.3285 37.8077L26.5381 40.7299L67.3381 3.52992L64.1285 0.603517V0.607651Z"
                  fill="#3232CD"
                  className="group-hover:fill-black"
                />
              </svg>
            </a>
          </div>
        </form>
      </section>
    </section>
  );
};
