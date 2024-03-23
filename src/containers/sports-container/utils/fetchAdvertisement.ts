const fetchAdvertisement = async () => {
  const res = await fetch("/api/advertisement");
  const data = await res.json();
  return data
};
export default fetchAdvertisement