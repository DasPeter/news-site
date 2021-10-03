import { News } from "./news.js";

const news = new News();

// news
// 	.getAll()
// 	.then((response) => {
// 		console.log("The returned news are:");
// 		console.log(response.data.articles);
// 	})
// 	.catch((err) => {
// 		console.log("News retrieval failed!");
// 	});

function searchNews() {
	let query = (<HTMLInputElement>document.getElementById("searchQuery")).value;
	news
		.getQuery(query)
		.then((response) => {
			let articles = response.data.articles;
			console.log(response.data);
		})
		.catch((err) => {
			console.log("Something failed while retrieving the news query!");
		});
}
