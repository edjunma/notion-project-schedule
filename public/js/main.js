const videosEl = document.querySelector('#videos');
const loadingEl = document.querySelector('#loading');
let loading = false;

const getVideosFromBackend = async () => {
  loading = true;
  const res = await fetch('https://localhost:5000/videos');
  const data = await res.json();
  loading = false;
  return data;
}