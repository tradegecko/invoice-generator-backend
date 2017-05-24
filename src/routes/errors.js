export function notFound(app) {
  res.status(404).json(new Error(message));
};

export function unauthorized(message, req, res) {
  res.status(401).json(new Error(message));
}

export function pdfGenerationError(message, error, res) {
  res.status(500).json({
    message,
    error
  });
}

export function needMoreInfo(message, req, res) {
  console.log("Need more info in request")
  res.status(500).json({
    error: message
  });
}
