import Image from 'next/image';

export default function Upload() {
	const uploadPhoto = async (e) => {
		const file = e.target.files[0];
		const filename = encodeURIComponent(file.name);
		const res = await fetch(`/api/upload-url?file=${filename}`);
		const { url, fields } = await res.json();
		const formData = new FormData();

		Object.entries({ ...fields, file }).forEach(([key, value]) => {
			formData.append(key, value);
		});

		const upload = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		if (upload.ok) {
			console.log('Uploaded successfully!');
			const link = `https://gay-plan-images.s3.sa-east-1.amazonaws.com/${filename}`;
			console.log(link);
			console.log('link:', link);
		} else {
			console.error('Upload failed.');
		}
	};

	return (
		<>
			<p>Upload a .png or .jpg image (max 1MB).</p>
			<input onChange={uploadPhoto} type='file' accept='image/png, image/jpeg' />
			<div className='h-72 w-72 bg-blue relative'>
				<Image layout='fill' alt='' src={'https://gay-plan-images.s3.sa-east-1.amazonaws.com/a6e41530326d35e0e09157792435d14e.jpg'} className='object-cover h-full w-full rounded-t-xl sm:rounded-r-none sm:rounded-l-xl' />
			</div>
		</>
	);
}
