export default function test() {
	// function Foo(bar) {
	// 	this.a = bar;
	// 	this.b = new Array(bar[0], bar[1], bar[2]);
	// }

	// const bar = [10, 10, 10];
	// const zzz = new Foo(bar);

	// bar[0] = 100;
	// bar[3] = 100;

	// const qux = bar[0] + zzz.a[3] + zzz.b[0];
	// console.log(qux);
	const myArray = ['0', '1', '2', '3'];

	// JSX and CSS tabs can be modify
	// <div className='flex justify-center'>
	// 		{myArray.map((x) => (
	// 			<div key={x}>{x}</div>
	// 		))}
	// 	</div>;
	const typeList = [{ type: '' }, { type: 'Plain' }, { type: 'PDF' }];
	const categoryList = [{ category: '' }, { category: 'Audit' }, { category: 'Application' }, { category: 'Other' }];
	console.log('yes' + 'b');

	return (
		<div className='flex justify-center'>
			<form>
				<div>
					<label>Document Name</label>
					<input id='documentName' type='text'></input>
				</div>
				<div>
					<label>Dcoument Type</label>
					<select id='documentType' type='select' onChange={(e) => setRegisterData({ ...registerData, industry: e.target.value })}>
						{typeList.map((type) => (
							<option key={type.type} value={type.type}>
								{type.type}
							</option>
						))}
					</select>
				</div>

				<div>
					<label>Category</label>
					<select id='category' type='select' className='focus:ring-0 focus:border-blue-t-300 block w-full rounded' name='documentType' required onChange={(e) => setRegisterData({ ...registerData, industry: e.target.value })}>
						{categoryList.map((category) => (
							<option key={category.category} value={category.category}>
								{category.category}
							</option>
						))}
					</select>
				</div>
				<div>
					<label>Email</label>
					<input type='email' required name='email' id='email' autoComplete='email' />
				</div>
			</form>
		</div>
	);
}
