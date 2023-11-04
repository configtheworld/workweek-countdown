export default async function () {
  const { data: serverData } = await useFetch("/api/counters");
  return serverData.value;
}
