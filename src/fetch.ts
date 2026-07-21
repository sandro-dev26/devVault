async function getDevData() {
  const response = await fetch("/data/data.json");

  if (!response.ok) {
    return undefined;
  }

  const data = await response.json();

  return data;
}

export default getDevData;
