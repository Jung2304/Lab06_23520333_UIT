export default function handler(req, res) {
  res.status(401).json({ 
    error: 'Unauthorized',
    message: 'Invalid or missing API key. Please provide x-api-key header.'
  });
}
