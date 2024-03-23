const fetchSports = async () => {
  const res = await fetch("/api/sports");
  const data = await res.json();
  return data
};

export default fetchSports