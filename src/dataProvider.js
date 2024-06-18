import axios from "axios";

const axiosAnt = axios.create({
  baseURL: "https://api.antcar.dev2.webant.ru",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const dataProvider = {
  getList: async (resource, params) => {
    const { data } = await axiosAnt.get(`/${resource}`, {
      params: params.filter,
    });
    return {
      data: data.items,
      total: data.totalCount,
    };
  },

  getOne: async (resource, params) => {
    const { data } = await axiosAnt.get(`/${resource}/${params.id}`);
    return { data };
  },

  getMany: async (resource, params) => {
    const { data } = await axiosAnt.get(`/${resource}`, {
      params: { id: params.ids },
    });
    return { data: data.items };
  },

  getManyReference: async (resource, params) => {
    const { data } = await axiosAnt.get(`/${resource}`, {
      params: { ...params.filter, [params.target]: params.id },
    });
    return { data: data.items, total: data.totalCount };
  },

  update: async (resource, params) => {
    const { data } = await axiosAnt.put(
      `/${resource}/${params.id}`,
      params.data
    );
    return { data };
  },

  updateMany: async (resource, params) => {
    for (const id of params.ids) {
      await axiosAnt.put(`/${resource}/${id}`, params.data);
    }
    return { data: params.ids };
  },

  create: async (resource, params) => {
    const { data } = await axiosAnt.post(`/${resource}`, params.data);
    return { data };
  },

  delete: async (resource, params) => {
    await axiosAnt.delete(`/${resource}/${params.id}`);
    return { data: params.previousData };
  },

  deleteMany: async (resource, params) => {
    for (const id of params.ids) {
      await axiosAnt.delete(`/${resource}/${id}`);
    }
    return { data: params.previousData };
  },
};

export default dataProvider;
