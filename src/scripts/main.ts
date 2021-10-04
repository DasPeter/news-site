import { News } from "./news.js";

const news = new News();
declare let Handlebars;

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchNews);

news
	.getAll()
	.then((response) => {
		console.log("The returned news are:");
		console.log(response.data.articles);
		renderNews(response.data.articles);
	})
	.catch((err) => {
		console.log("News retrieval failed!");
	});

function searchNews() {
	let query = (<HTMLInputElement>document.getElementById("searchQuery")).value;
	console.log(query);
	news
		.getQuery(query)
		.then((response) => {
			console.log(response.data.articles);
			renderNews(response.data.articles);
		})
		.catch((err) => {
			console.log("Something failed while retrieving the news query!");
		});
}

function renderNews(news) {
	const templateSource = document.getElementById("news-template").innerHTML;
	const template = Handlebars.compile(templateSource);
	document.getElementById("news-container").innerHTML = template({
		news: news,
	});
	console.log(template);
}
