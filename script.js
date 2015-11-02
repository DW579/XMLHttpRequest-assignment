console.log('You\'re ready to begin!')

var requestIndex = new XMLHttpRequest();
requestIndex.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText)
	}
}
requestIndex.open('GET', '/')
requestIndex.send()

var requestJson = new XMLHttpRequest();
requestJson.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		console.log(JSON.parse(this.responseText))
	}
}
requestJson.open('GET', '/data.json')
requestJson.send()

var requestReddit = new XMLHttpRequest();
requestReddit.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText)
		data.data.children.forEach(function (post) {
			console.log(post.data.title, post.data.thumbnail, post.data.url)
		})
	}
}
requestReddit.open('GET', 'http://www.reddit.com/r/aww.json')
requestReddit.send()
