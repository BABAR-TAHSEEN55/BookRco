import img1 from "@/assets/BooksAssets/TheGreatGatsby.jpeg";
import { Button } from "../ui/button";
const BooksInfo = () => {
	return (
		<div className="p-8">
			<div className="container  max-w-5xl m-auto flex justify-evenly border p-8 rounded-xl">
				<img src={img1} alt="" className="w-auto h-80" />

				<div className=" py-8 p-4 border rounded-xl">
					<h1 className="text-2xl font-bold mt-4  ">The Great Gatsby</h1>
					<p className="text-gray-400 max-w-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt. Eligendi ullam ducimus
						voluptatem ea delectus debitis ab harum architecto.Lorem ipsum dolor sit amet.
					</p>
					<div className="flex space-x-8 mt-4">
						<Button>Read</Button>
						<Button>Read</Button>
						<Button>Read</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BooksInfo;
