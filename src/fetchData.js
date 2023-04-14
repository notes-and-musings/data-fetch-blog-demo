import axios from "axios";

export async function fetchList(filter, sortOrder) {
  const url = filter === "ACTIVE" ? "/activeList.json" : "/inactiveList.json";

  const { data } = await axios.get(url);

  if (sortOrder === "desc") {
    data.sort((a, b) => b.id - a.id);
  }

  return data;
}

export async function fetchDetails(id) {
  const { data } = await axios.get("/detail.json");
  return data[id];
}
