import type { FC } from "react";
import { Heart } from "lucide-react";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className=" flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="footer-button flex-1 ">Sepete Ekle</button>
          <button className="footer-button">
            <Heart />
          </button>
        </div>
        <button className="footer-button bg-blue">Hemen Satın Al</button>
      </div>

      <div>
        <h2 className="font-semibold mb-2 mt-8 text-2xl text-dark-gray">
          Bu ürün hakkında
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </div>
    </div>
  );
};

export default Foot;
