import type { FC, ReactNode } from "react";
import { useProfile } from "../../service/auth";
import Loader from "../loader";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  allowedRoles?: ("user" | "admin")[];
}

const Protected: FC<Props> = ({ children, allowedRoles }) => {
  //oturumu açık olan kullanıcının bilgilerini al
  const { isLoading, user } = useProfile();

  //kullanıcı verisi yüklenene kadar loader göster
  if (isLoading) return <Loader />;

  //oturumu açık değilse login sayfasına yönlendir
  if (!user) return <Navigate to="/" replace />;

  //eğer rolü yetersize ana sayfaya yönlendir
  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/" replace />;

  //yetkisi varsa sayfa içeriğini göster

  return children;
};

export default Protected;
