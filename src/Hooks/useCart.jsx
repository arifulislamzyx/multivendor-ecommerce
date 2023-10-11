"use client";
import { AuthContext } from "@/Providers/AuthProviders";
import { useContext } from "react";
import UserAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";
import { data } from "autoprefixer";

const UseCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = UserAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [refetch, data];
};

export default UseCart;
