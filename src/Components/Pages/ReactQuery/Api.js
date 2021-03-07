const url = "https://gorest.co.in/public-api/";
const token =
  "22ddab2ccba8523b552aeaae9f63eaa0fabdee2338a3bd6defdb897c1a5916b9";

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer " + token,
});
const users = url + "users/";
const comments = url + "comments/";
const userPosts = (id) => users + id + "/posts";

function formatCode(errors) {
  let str = "";
  for (const error of errors) {
    str += `the field ${error.field} is invalid, ${error.message}\n`;
  }

  return str;
}

async function fetchData(link, config = {}) {
  const res = await fetch(link, config);
  const json = await res.json();

  if (json.code > 299) {
    throw new Error(formatCode(json.data));
  }

  return json.data;
}

export async function fetchUsers() {
  const data = await fetchData(users);
  return data;
}

export async function fetchUserPosts(id) {
  const data = await fetchData(userPosts(id));
  return data;
}

export async function fetchComments() {
  const data = await fetchData(comments);
  return data;
}

export async function createUser(body) {
  const data = await fetchData(users, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return data;
}
