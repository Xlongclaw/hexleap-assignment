import { SPORTS_ENDPOINT } from "../constants";

const fetchSports = async () => {
  const res = await fetch(SPORTS_ENDPOINT);
  const data = await res.json();
  return data
};

export default fetchSports