import { env } from "./config/env.js";




app.listen(env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});