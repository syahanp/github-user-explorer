import Spinner from "./ui/spinner";

const Loading = () => {
	return (
		<div
			data-test-id="loading-spinner"
			className="flex justify-center items-center w-full h-[160px] bg-white"
		>
			<Spinner />
		</div>
	);
};

export default Loading;
