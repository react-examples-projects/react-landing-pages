const url = "https://gorest.co.in/public-api/";
const users = url + "users/";
const comments = url + "comments/";
const userPosts = (id) => users + id + "/posts";

async function fetchData(link) {
  const res = await fetch(link);
  const json = await res.json();
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
