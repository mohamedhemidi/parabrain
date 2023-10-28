import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  APP_URI: str(),
  MONGODB_URI: str(),
  PORT: port(),
});
