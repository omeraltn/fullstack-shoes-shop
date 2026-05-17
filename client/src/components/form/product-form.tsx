import { Form, Formik } from "formik";
import type { FC } from "react";
import type { Product, ProductValues } from "../../types";
import { INPUT_ARRAY } from "../../constants";
import FormField from "./form-field";
import { PRODUCT_SCHEMA } from "../../constants/schemas";
import { useNavigate } from "react-router-dom";

interface Props {
  data?: Product;
  isPending: boolean;
  mutate: (data: ProductValues) => void;
}

const ProductForm: FC<Props> = ({ data, isPending, mutate }) => {
  const navigate = useNavigate();

  const initialValues: ProductValues = {
    name: data?.name || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "men",
  };
  const handleSubmit = (values: ProductValues) => {
    mutate(values);
    navigate("/admin/dashboard");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PRODUCT_SCHEMA}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <FormField {...input} />
        ))}
        <button
          disabled={isPending}
          className="bg-blue py-1 px-4 rounded-md text-white hover:bg-blue/80"
        >
          Gönder
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
