export default async function handler(req, res) {
    const {
        id
    } = req.query;
    const response = await fetch(`http://localhost:4000/search/${id}/details`);
    const data = await response.json();
    res.status(200).json(data);
}