const { AuthContext } = require("@/Providers/AuthProviders");
const { default: axios } = require("axios");
const { useRouter } = require("next/navigation");
const { useContext, useEffect } = require("react");

const axiosSecure = axios.create({
  baseURL: "https://mitnog-server-dgugxhu66-ariful-islams-projects.vercel.app/",
});

const UserAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useRouter();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return [axiosSecure];
};

export default UserAxiosSecure;
