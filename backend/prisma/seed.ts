
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const Seed = async()=>{
	await prisma.books.createMany({
		data: [{ author: "Farhan", description:"The Unhinged Player",title:"The Greatest"},
		{ author: "Lottie", description:"The Unhinged UNPlayer",title:"The Largest"}
		]
	})
}

Seed().then(()=>prisma.$disconnect())
