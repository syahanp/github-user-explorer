const SomethingWentWrong = () => {
	return (
		<div
			data-test-id="something-went-wrong"
			className="flex justify-center items-center gap-4"
		>
			<h1 className="text-lg font-medium">Something Went Wrong</h1>
			<p className="text-slate-600">Something went wrong in our end</p>
		</div>
	);
};

export default SomethingWentWrong;
