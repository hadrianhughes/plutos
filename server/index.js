const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 3000;

app.use(serveStatic(path.resolve(__dirname + '/../public')));

app.get('/', (req, res) => {
	const html = `
	<html>
		<head>
			<title>Plutos</title>
		</head>
		<body>
			<div id="app"></div>
			<script src="/js/bundle.js"></script>
		</body>
	</html>
	`;

	res.send(html);
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
