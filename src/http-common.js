import axios from "axios";

export default axios.create({
  baseURL: "localhost:8080/product/upload",
  headers: {
    "Content-type": "application/json"
  }
});
