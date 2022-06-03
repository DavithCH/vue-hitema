const accessToken = localStorage.getItem("user.accessToken");

const privateAxios = axios.create({
  baseURL: "localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
