export default async function () {
  const { data: serverData } = await useFetch("/api/counters", {
    headers: {
      Authorization: "authTokenExample",
      "Content-Type": "application/json",
    },
  });
  return serverData.value;
}
