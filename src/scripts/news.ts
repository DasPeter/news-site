declare let axios;

export class News {
	getAll(): Promise<any> {
		const url: string =
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=58f07f28dd7e4e3a8a25957a49dba980";
		return axios.get(url);
	}
	getQuery(query: string): Promise<any> {
		query = encodeURI(query);
		const url: string = `https://newsapi.org/v2/top-headlines?q=${query}&country=us&apiKey=58f07f28dd7e4e3a8a25957a49dba980`;
		return axios.get(url);
	}
}
