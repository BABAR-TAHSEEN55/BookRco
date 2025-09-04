import { CreateServer } from "./server.ts";
import { config } from "./config/config.ts";

const server = CreateServer();

server.listen(config.port, () =>
    console.log(`Server started Successfully at ${config.port}`),
);
//TODO :Add dotenv.config and change .env accordingly and kinde setup as well

//MAIN FEATURES
//TODO: 1) Submit Book Handling , Generating Something of book from AI
// Frotnend Auth Setup , Backend Authorized Auth
// Getting Data from Google book or search for next libraray postgres db
