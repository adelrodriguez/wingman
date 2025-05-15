import { cancel, isCancel, select, spinner } from "@clack/prompts"
import { $ } from "bun"

const s = spinner()

s.start("Checking for template remote...")

const remotes = await $`git remote`.text().then(text => text.split("\n"))

if (remotes.includes("template")) {
  s.stop("Template remote found")
  process.exit(0)
}

s.stop("No template remote found")

const confirmation = await select({
  message: "Do you want to add the template remote?",
  options: [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ],
})

if (!confirmation || isCancel(confirmation)) {
  cancel(
    "Please add the template remote by running the command: `git remote add template git@github.com:adelrodriguez/startline.git`"
  )

  process.exit(0)
}

s.start("Adding template remote...")

await $`git remote add template git@github.com:adelrodriguez/wingman.git`

s.stop("Template remote added")

s.start("Fetching template remote...")

await $`git fetch template`

s.stop("Template remote fetched")

s.start("Merging template remote...")

await $`git merge template/main --allow-unrelated-histories --no-commit`

s.stop("Template remote merged. Please resolve any conflicts.")
