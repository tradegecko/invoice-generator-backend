import wkhtmltopdf from 'wkhtmltopdf';
import { generateHTML, generateFileName, getBaseURL } from '../lib/util';
import { needMoreInfo } from './errors';

export function validate(req, res, next) {
  if (!req.body.html) {
    needMoreInfo("You must specify an HTML string.", req, res);
  }
  else {
    next();
  }
}

export function generate(req, res) {
  console.log('Generating pdf');
  var filenameStub = req.body.filename || 'pdf';
  var orientation = req.body.orientation || 'Portrait';

  var html = generateHTML(req.body);
  var filename = generateFileName(filenameStub);

  wkhtmltopdf(html, {
    printMediaType: true,
    disableJavascript: true,
    orientation,
    output: './public/' + filename
  }, function(err, stream) {
    if (err) {
      console.log('error making pdf', err);
    }
    res.status(200).json({
      fileLocation: getBaseURL(req) + filename
    });
  });
}
