import aws from 'aws-sdk';

export default async function handler(req, res) {
	aws.config.update({
		accessKeyId: 'AKIARUKCALCRH4XFQSWS',
		secretAccessKey: '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',
		region: 'sa-east-1',
		signatureVersion: 'v4',
	});

	const s3 = new aws.S3();

	const post = await s3.createPresignedPost({
		Bucket: 'gay-plan-images',
		Fields: {
			key: req.query.file,
		},
		Expires: 60, // seconds
		Conditions: [
			['content-length-range', 0, 1048576], // up to 1 MB
		],
	});
	// const link = `https://gay-plan-images.s3.sa-east-1.amazonaws.com/${post.fields.key}`;
	res.status(200).json(post);
}
