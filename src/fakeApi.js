
export function fetchProfileData() {
  let userPromise = fetchUser();
  let postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchUser() {
  console.log("fetch user...");
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      console.log("fetched user");
      return response.json();
    }
  );
}

function fetchPosts() {
  console.log("fetch posts...");
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      console.log("fetched posts");
      return response.json();
    }
  );
}
