import img1 from "@/assets/BooksAssets/TheCatcherintheRy.jpeg";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Bookmark, BookOpen, DollarSign } from "lucide-react";
interface OtherBook {
	id: number;
	title: string;
	img: string;
}
interface BookDetailsProps {
	img: string;
	title: string;
	description: string;
	genre: string[];
	author: string;
}

const otherBooks: OtherBook[] = [
	{
		id: 1,
		title: "Book One",
		img: img1,
	},
	{
		id: 2,
		title: "Book Two",
		img: img1,
	},
	{
		id: 3,
		title: "Book Three",
		img: img1,
	},
];
const BookDetails = ({ img, title, description, genre, author }: BookDetailsProps) => {};

const BooksInfo = () => {
	return (
		<div>
			{/*// Main */}
			<div className="container p-1 sm:p-2  flex flex-col lg:flex-row md:max-w-5xl md:mx-auto md:justify-evenly  items-center   ">
				<div>
					<img src={img1} alt="Image" className="w-auto h-60 md:h-70 lg:h-80 mx-auto" />
				</div>
				<div className="mt-4 border rounded-xl p-4   lg:w-1/2 flex flex-col space-y-4">
					<h1 className="text-xl font-semibold">The Catchy Catcher</h1>
					<p className="text-white/40">Lorem ipsum dolor sit elit. </p>
					<p>Stars</p>

					<div className="flex  space-x-2 sm:space-x-8 ">
						{/*<Button>Read</Button>*/}
						<Badge variant="destructive">Thriller</Badge>
						<Badge variant="destructive">Mystery</Badge>
						<Badge variant="destructive">Adventure</Badge>

						{/*<Button>Read</Button>*/}

						{/*<Button>Read</Button>*/}
					</div>
					<p className="border p-1 sm:p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, itaque, obcaecati natus,
						quos eos ex perferendis quibusdam molestias quidem beatae repellendus necessitatibus mollitia
						ut. Aspernatur quo magni quod a excepturi.
					</p>
					<p>~ Author Name</p>

					<div className="flex space-x-2 sm:space-x-4 ">
						<Button className="flex-1">
							<Bookmark /> Save
						</Button>

						<Button className="flex-1">
							<BookOpen /> Mark Read
						</Button>
						<Button className="flex-1">
							<DollarSign /> Buy
						</Button>
					</div>
				</div>
			</div>

			{/*ABout the Author*/}
			<div className="w-full lg:flex lg:space-x-2 md:py-8">
				<div className="border p-4 mt-4 rounded-xl  flex flex-col space-y-4 lg:w-[40%]">
					<h1>About the Author</h1>
					<div className="flex items-center space-x-4">
						<div className="bg-orange-300 size-10 rounded-full" />
						<h2>J.K Rowling</h2>
					</div>

					<p className="max-w-3xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sunt, adipisci mollitia,
						reprehenderit vel corrupti quam animi quod tempora consequuntur ducimus tempore voluptatum totam
						magni. Voluptate quod tenetur voluptas adipisci reiciendis eum asperiores recusandae magnam
						libero in doloribus dignissimos repudiandae praesentium facere minima dolore, maxime dolorum
						unde nemo. Eum
					</p>
					<div>
						<h3>Other Books</h3>
						<div className="flex py-4">
							{otherBooks.map((book) => (
								<div key={book.id} className="flex-1 ">
									<img src={book.img} alt="" className="w-auto h-30" />
								</div>
							))}
						</div>
					</div>
				</div>

				{/*About the Story*/}
				<div className="border p-4 mt-4 rounded-xl  flex flex-col space-y-4 lg:w-[60%]">
					<p className="max-w-3xl lg:p-8 p-2">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sunt, adipisci mollitia,
						reprehenderit vel corrupti quam animi quod tempora consequuntur ducimus tempore voluptatum totam
						magni. Voluptate quod tenetur voluptas adipisci reiciendis eum asperiores recusandae magnam
						libero in doloribus dignissimos repudiandae praesentium facere minima dolore, maxime dolorum
						unde nemo. Eum
					</p>
				</div>
			</div>
		</div>
	);
};
export default BooksInfo;
