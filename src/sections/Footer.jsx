export const Footer = () => {
  return (
    <footer className="flex w-screen flex-col gap-4 bg-blue p-8 font-mont text-lg leading-6 tracking-tight text-yellowLight md:flex-row md:items-center md:justify-between md:p-16 md:text-2xl md:leading-8 lg:text-font26">
      <div>
        <img
          className="h-10 md:h-16 lg:h-20"
          src="/icons/logo_l.svg"
          alt="Oasis logo"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <a href="">
          <p className="font-medium">About us</p>
        </a>
        <a href="">
          <p className="font-medium">Contact us</p>
        </a>
        <a href="">
          <p className="font-medium">FAQ</p>
        </a>
      </div>
      <div className="flex gap-8 md:justify-end md:gap-4">
        <a href="">
          <img
            className="h-6 md:h-8 lg:h-12"
            src="/icons/instagram_l.svg"
            alt="Instagram icon"
          />
        </a>
        <a href="">
          <img
            className="h-6 md:h-8 lg:h-12"
            src="/icons/twitter_l.svg"
            alt="X icon"
          />
        </a>
        <a href="">
          <img
            className="h-6 md:h-8 lg:h-12"
            src="/icons/whatsapp_l.svg"
            alt="WhatsApp icon"
          />
        </a>
      </div>
    </footer>
  );
};
