import type { FC } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import Badge from "./badge";
import Price from "./price";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col justify-between ">
      <div>
        <div className="relative p-2 bg-white rounded-2xl xl:rounded-3xl ">
          <Badge product={product} />
          <img
            src={product.picture[0]}
            alt={product.name}
            className="rounded-xl xl:rounded-3xl size-full mx-auto"
          />
        </div>
        <h2 className="font-bold line-clamp-2 my-4 lg:text-[20px] xl:text-[32px] ">
          {product.name}
        </h2>
      </div>
      <Link
        to={`/shoe/${product.id}`}
        className="bg-dark-gray px-4 py-2 rounded-lg text-center flex items-center justify-center gap-1 text-white  hover:scale-[0.97] hover:bg-white hover:text-black transition duration-300"
      >
        Detay - <Price product={product} />
      </Link>
    </div>
  );
};

export default Card;
