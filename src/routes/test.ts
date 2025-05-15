import { Hono } from "hono"

import type { AppContext } from "~/shared/types"

const test = new Hono<AppContext>().get("/me", c =>
  c.text("Are you testing me?")
)

export default test
