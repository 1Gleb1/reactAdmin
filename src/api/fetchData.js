import axios from "axios";

const axiosAnt = axios.create({
  baseURL: "https://api.antcar.dev2.webant.ru",
});

export default async function fetchData(url) {
  try {
    const response = await axiosAnt(url);
    if (response.status === 200) {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
}

export default async function fetchData(url) {
  try {
    const response = await axiosAnt(url);
    if (response.status === 200) {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
}

