const API_KEY = '8a8d4d55b5ac63e5b8d573cc7d3d4e01';

async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list`;
    try {
        let res = await fetch(`${apiUrl}?api_key=${API_KEY}`, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


