import Model from '../models';

export const findAll = async (entity: string, params?:object, exclude?: object) => {
  const allData = await Model[entity].find(params, exclude);
  return allData;
};

export const findOneByParams = async (entity: string, params: object, exclude?: object) => {
  const filteredData = await Model[entity].findOne(params, exclude);
  return filteredData;
};

export const createPayload = async (entity: string, payload: object) => {
  const createdData = await Model[entity].create(payload);
  createdData.save();
  return createdData;
};
