import { CreateServer } from "./server.ts";
import { config } from "./config/config.ts";

const server = CreateServer();

server.listen(config.port, () =>
    console.log(`Sever started Successfully at ${config.port}`),
);
//TODO :Add dotenv.config and change .env accordingly and kinde setup as well
