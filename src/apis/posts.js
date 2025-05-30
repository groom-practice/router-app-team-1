const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPosts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getPostById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createPost(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.log("수정 실패", errorData);
    throw new Error("수정 실패요");
  }
  return res.json();
}

export async function updatePost(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}
