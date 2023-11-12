"use client";
import { AuthContext } from "@/Providers/AuthProviders";
import { useContext } from "react";
import UserAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const UseCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = UserAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      const data = res.data;
      return data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
