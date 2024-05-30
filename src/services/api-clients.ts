import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b90bdf35b9b4340b768fef8f7244c7f",
  },
});
