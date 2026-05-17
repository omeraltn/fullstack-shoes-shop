import type { FC } from "react";
import { Link } from "react-router-dom";
import { useDeleteProduct, useGetAllProducts } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Dashboard: FC = () => {
  const { isLoading, error, data, refetch } = useGetAllProducts();
  const { isPending, mutate } = useDeleteProduct();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div>
      <div className="flex justify-between items-center mb-5  ">
        <h1 className="text-2xl md:text-3xl font-semibold ">Ürünler</h1>
        <Link
          to={"/admin/create"}
          className="bg-blue px-4 py-1 md:px-6 md:py-2 rounded-md text-white  hover:brightness-75 transition"
        >
          Ürün Ekle
        </Link>
      </div>
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg mb-10 rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3 min-w-20 "></th>
              <th className="px-6 py-3  ">İsim</th>
              <th className="px-6 py-3 ">Fiyat</th>
              <th className="px-6 py-3 whitespace-nowrap">İndirim (%)</th>
              <th className="px-6 py-3 ">Eylemler</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr className="bg-white border-b border-zinc-300 hover:bg-gray-50 font-semibold ">
                <td className="p-3 ">
                  <img
                    src={product.picture[0]}
                    className="size-16 md:size-18 max-w-full max-h-full rounded-xl"
                  />
                </td>
                <td className="row">
                  {product.name.length > 25
                    ? product.name.slice(0, 30) + "..."
                    : product.name}
                </td>
                <td className="row">${product.price}</td>
                <td className="row">
                  {product.discount > 0 ? `%${product.discount}` : "Yok"}
                </td>
                <td className="p-4 space-x-4 ">
                  <Link
                    to={`/admin/edit/${product.id}`}
                    className="text-blue-600 hover:underline "
                  >
                    Düzenle
                  </Link>
                  <button
                    disabled={isPending}
                    onClick={() => mutate(product.id)}
                    className="text-red-500 hover:underline md:ps-3"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
