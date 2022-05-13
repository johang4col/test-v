export default function mail(req, res) {
	const { email } = req.body;
	res.status(200).json({ status: `${email}` });
}
