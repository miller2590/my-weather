import getAllCurrent from "./provider";

async function getCurrentTemp(location) {
  let res = await getAllCurrent(location);
  return res.data.main.temp;
}

async function getCurrentDescription(location) {
  let res = await getAllCurrent(location);
  return res.data.weather[0].description;
}

export const apiData = { getCurrentTemp, getCurrentDescription };
