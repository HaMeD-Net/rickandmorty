export const fetchData = async (url: string, body?: any) => {
  let results = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: body,
  });
  let characters = await results.json();

  return characters.data;
};
