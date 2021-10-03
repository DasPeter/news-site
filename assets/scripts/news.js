export class News {
    getAll() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=58f07f28dd7e4e3a8a25957a49dba980";
        return axios.get(url);
    }
    getQuery(query) {
        query = encodeURI(query);
        const url = `https://newsapi.org/v2/top-headlines?q=${query}&country=us&apiKey=58f07f28dd7e4e3a8a25957a49dba980`;
        return axios.get(url);
    }
}
