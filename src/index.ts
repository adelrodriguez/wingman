import { Hono } from "hono"
import { StatusCodes } from "http-status-codes"

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

app.get("/", (c) => {
  return c.text("Hello Wingman!", { status: StatusCodes.OK })
})

export default app
