import { ADVERTISEMENT_ENDPOINT } from "../constants";

const fetchAdvertisement = async () => {
  const res = await fetch(ADVERTISEMENT_ENDPOINT);
  const data = await res.json();
  return data
};
export default fetchAdvertisement