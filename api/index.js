export function handler(request, response) {
  return response.status(200).json({ message: 'received api' })
}

export default handler
