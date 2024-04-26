export const Footer = () => {
  return (
    <footer className="lg:text-font26 flex w-screen flex-col gap-4 bg-blue p-8 font-mont text-lg leading-6 tracking-tight text-yellowLight md:flex-row md:items-center md:justify-between md:p-16 md:text-2xl md:leading-8">
      <div>
        <img
          className="h-10 md:h-16 lg:h-20"
          src="/icons/logo_l.svg"
          alt="Oasis logo"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <p className="font-medium">About us</p>
        <p className="font-medium">Contact us</p>
        <p className="font-medium">FAQ</p>
      </div>
      <div className="flex gap-8 md:justify-end md:gap-4">
        <img
          className="h-6 md:h-8 lg:h-12"
          src="/icons/instagram_l.svg"
          alt="Instagram icon"
        />
        <img
          className="h-6 md:h-8 lg:h-12"
          src="/icons/twitter_l.svg"
          alt="X icon"
        />
        <img
          className="h-6 md:h-8 lg:h-12"
          src="/icons/whatsapp_l.svg"
          alt="WhatsApp icon"
        />
      </div>
    </footer>
  );
};
