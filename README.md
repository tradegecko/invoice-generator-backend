ZAPDOS
==================================

This is a PDF generator service that any app can use! It will take HTML and CSS
and give you a PDF.

## Usage

Send a POST request to the app's endpoint with the following data which will be used
to construct an HTML document string which will get piped into [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf).

* **html** (required) [string]: HTML string to render.
* **css** [string]: CSS string to apply to the HTML. Defaults to an empty string.
* **styleLinks** [array|string]: Links to external CSS files to add as <link> tags in the head of the HTML. Defaults to an empty array.
* **orientation** [string]: PDF orientation, either `Landscape` or `Portrait`. Defaults to Portrait.
* **baseURL** [string]: If set, will add `<base href="${baseURL}">` to the HTML document's head. If there are relative URLs in the body of the HTML, they will be relative to this URL.

A successful request will return a response which is a JSON object with a `fileLocation` key, which gives a public download link for the PDF.

This app is currently running at https://tg-pdf-generator-live.herokuapp.com.

## Example

```
Ember.$.ajax({
  url: 'https://tg-pdf-generator-live.herokuapp.com',
  method: 'POST',
  data: {
    html: myHTMLString,
    css: myCSSString,
    styleLinks: [cssLink1, cssLink2],
    orientation: 'Landscape',
    baseURL: 'https://www.myspecialapp.com',
  },
  success: (res, status, xhr) => {
    window.location = res.fileLocation;
  },
});
```

License
-------

MIT
