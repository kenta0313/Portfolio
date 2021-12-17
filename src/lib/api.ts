
const url = `https://asanoblog.microcms.io/api/v1/blog`
const apiKey = "78b3a9deabaf4b7c8c14a8b1bbfd22ce8d38";

const params =
  {
    "method": "GET",
    "headers": {
      "X-MICROCMS-API-KEY": apiKey
    }
  }


export const getAllPostsData = async () => {
  const data = await fetch(url, params)
  .then(res => res.json())
  .catch(() => null);

  return data.contents;
}