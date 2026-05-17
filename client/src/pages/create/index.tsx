import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/form/product-form";

const Create: FC = () => {
  return (
    <div className="max-w-250 mx-auto">
      <div className="flex items-center justify-between">
        <Link
          to={"/admin/dashboard"}
          className="text-blue flex items-center gap-2 mb-2"
        >
          <ArrowLeft />
          <span>Geri</span>
        </Link>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-5 ">Ürün Ekle</h1>
      </div>
      <ProductForm />
    </div>
  );
};

export default Create;
