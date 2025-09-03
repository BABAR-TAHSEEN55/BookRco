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

interface AuthorDetails {
	name: string;
	bio: string;
	avatar: string;
	otherBooks: OtherBook[];
}
interface StoryInfoProps {
	story: string;
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
// Book Details Component
const BookDetails = ({ img, title, description, genre, author }: BookDetailsProps) => {
	return (
		<div className="container p-1 sm:p-2  flex flex-col lg:flex-row md:max-w-5xl md:mx-auto md:justify-evenly  items-center   ">
			<div>
				<img src={img} alt={title} className="w-auto h-60 md:h-70 lg:h-80 mx-auto" />
			</div>
			<div className="mt-4 border rounded-xl p-4   lg:w-1/2 flex flex-col space-y-4">
				<h1 className="text-xl font-semibold">{title}</h1>
				<p className="text-white/40">{description}</p>
				<p>Stars</p>

				<div className="flex  space-x-2 sm:space-x-8 ">
					{genre.map((genre, index) => (
						<Badge key={index} variant="destructive">
							{genre}
						</Badge>
					))}
				</div>
				<p className="border p-1 sm:p-2">{description}</p>
				<p>~ {author}</p>

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
	);
};
//Author Details Component

const AuthorDetails = ({ name, bio, avatar, otherBooks }: AuthorDetails) => {
	return (
		<div className="border p-4 mt-4 rounded-xl  flex flex-col space-y-4 lg:w-[40%]">
			<h1>About the Author</h1>
			<div className="flex items-center space-x-4">
				<img src={avatar} alt={name} className="size-10 rounded-full bg-orange-30" />
				<h2>{name}</h2>
			</div>

			<p className="max-w-3xl">{bio}</p>
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
	);
};

//Story Component
const StoryInfo = ({ story }: StoryInfoProps) => {
	return (
		<div className="border p-4 mt-4 rounded-xl flex flex-col space-y-4 lg:w-[60%]">
			<p className="max-w-3xl lg:p-8 p-2">{story}</p>
		</div>
	);
};

// Main Component
const BooksInfo = () => {
	return (
		<div>
			{/*Book Details*/}
			<BookDetails
				img={img1}
				title="The Catchy Catcher"
				description="A coming-of-age story about Holden Caulfield, a teenager navigating the challenges of growing up in New York City."
				genre={["Classic", "Mystery", "Thriller"]}
				author="J.D. Salinger"
			/>

			{/*ABout the Author*/}
			<div className="w-full lg:flex lg:space-x-2 md:py-8">
				{/*<div className="border p-4 mt-4 rounded-xl  flex flex-col space-y-4 lg:w-[40%]">
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
				</div>*/}
				<AuthorDetails
					name="J.D. Salinger"
					bio="J.D. Salinger was an American writer best known for his novel 'The Catcher in the Rye'. His works explore themes of innocence, identity, and alienation, and he remains one of the most influential authors of the 20th century."
					avatar="https://randomuser.me/api/portraits/men/32.jpg"
					// otherBooks={[
					// 	{
					// 		id: 1,
					// 		title: "Franny and Zooey",
					// 		img: img1,
					// 	},
					// 	{
					// 		id: 2,
					// 		title: "Nine Stories",
					// 		img: img1,
					// 	},
					// 	{
					// 		id: 3,
					// 		title: "Raise High the Roof Beam, Carpenters",
					// 		img: img1,
					// 	},
					// ]}
					otherBooks={otherBooks}
				/>

				{/*About the Story*/}
				{/*<div className="border p-4 mt-4 rounded-xl  flex flex-col space-y-4 lg:w-[60%]">
				</div>*/}

				<StoryInfo story="In the bustling city of New York, Holden Caulfield finds himself caught between childhood innocence and the complexities of adulthood. As he wanders the streets, he encounters quirky strangers, hidden jazz clubs, and a mysterious red notebook that seems to follow him everywhere. With each step, Holden uncovers secrets about his family, his friends, and himself, leading to an unforgettable adventure filled with laughter, heartbreak, and unexpected twists." />
			</div>
		</div>
	);
};
export default BooksInfo;
