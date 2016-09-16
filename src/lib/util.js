import randomstring from 'randomstring';

export function generateHTML(postBody) {
	let html = postBody.html || "";
  let styleLinks = postBody["styleLinks[]"] || [];
	let css = postBody.css || "";
	let baseURL = postBody.baseURL || "";

	if (html.substr)

	if (typeof styleLinks === 'string') styleLinks = [styleLinks];
	if (html.substr(0, 6) !== "<body>") {
		html = `<body>${html}</body>`;
	}

	return `<!doctype html>
		<html>
			<head>` +
			((baseURL) => baseURL ? `<base href="${baseURL}">` : '' )(baseURL) +
			styleLinks.reduce(function(a, b) {
				return a + '<link rel="stylesheet" href="' + b + '" type="text/css">';
			}, "") +
				`<style type="text/css">
					${css}
				</style>
			</head>
			${html}
		</html>
	`;
}

export function generateFileName(stub) {
	return stub + '-' + randomstring.generate().substr(0, 5) + '.pdf';
}

export function getBaseURL(req) {
	return req.protocol + '://' + req.get('host') + req.originalUrl;
}
