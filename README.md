<p align="center">
  <h1 align="center">🪶 Wingman</h1>

  <p align="center">
    <em><strong>A starter template for building Cloudflare Workers</strong></em>
  </p>
</p>

Wingman is an opinionated starter template for building Cloudflare Workers. It includes a set of my personal preferences when building projects using Cloudflare Workers.

Cloudflare Workers are great for building small APIs to complement a bigger project. A wingman to your project, if you will.

You don't have to limit yourself to a "small" project. You can use Cloudflare WWorker to build a full-stack application, either using what's already included here (like Hono + HTMX) or using something like Next.js with [next-on-pages](https://github.com/cloudflare/next-on-pages).

## What's included

- [Hono](https://github.com/honojs/hono) as our web framework
- [Zod](https://github.com/colinhacks/zod) for validation
- [Biome](https://biomejs.dev) for formatting and linting
- [Drizzle](https://drizzle.org) as the ORM for your D1 database (if needed)
- [Vitest](https://vitest.dev) for testing

...plus everything else that is included in the Cloudflare Workers ecosystem:

- [D1](https://developers.cloudflare.com/d1/) for your database
- [R2](https://developers.cloudflare.com/r2/) for storing files
- [KV](hhttps://developers.cloudflare.com/kv) for storing a low-latency key-value store
- [Durable Objects](https://developers.cloudflare.com/durable-objects/) for coordinating stateful tasks
- [Queues](https://developers.cloudflare.com/workers/queues/) for message queues
- [AI](https://developers.cloudflare.com/ai/) for building AI applications
- [Vectorize](https://developers.cloudflare.com/vector/) for semantic search and vector embeddings

## TODO

- [ ] Add a setup script
