import { API_URL, STRAPI_URL } from "../config";

export const getGames = async () => {
  const res = await fetch(
    `${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url`
  );
  const { data } = await res.json();
  return data;
};

export function getCoverImage({ attributes }) {
    console.log(attributes.cover)
  const { url } = attributes.cover.data.attributes;
  console.log("***************************************", url);
    console.log(`${STRAPI_URL}${url}`)
    return `${STRAPI_URL}${url}`
}
