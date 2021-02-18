const urlCreateMeme = "https://api.imgflip.com/caption_image";
const urlGetMemes = "https://api.imgflip.com/get_memes";

export default async function createMeme({ body, signal }) {
  const xhr = await fetch(urlCreateMeme, {
    method: "POST",
    body,
    signal,
  });

  const res = await xhr.json();
  return res;
}

export async function getMemes(signal) {
  const xhr = await fetch(urlGetMemes, { signal });
  const res = await xhr.json();
  return res;
}
