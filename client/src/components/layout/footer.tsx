import type { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-center bg-white text-dark-gray p-3 rounded-2xl md:rounded-3xl xl:rounded-4xl mt-5 font-semibold ">
      <p>
        Tüm hakları saklıdır. &copy; {new Date().getFullYear()} * KICK SHOES
      </p>
    </div>
  );
};

export default Footer;
