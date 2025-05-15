import { Hono } from "hono"
import { StatusCodes } from "http-status-codes"

import test from "~/routes/test"
import type { AppContext } from "~/shared/types"

const app = new Hono<{ Bindings: AppContext }>()
  .route("/test", test)
  .get("/ping", c => c.text(Date.now().toString()))
  .get("/", c => c.text("Hello Wingman!", { status: StatusCodes.OK }))

export default app
