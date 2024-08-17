// This is a manual script to sync the template with the current repo. It is
// recommended to use the GitHub action included instead, but this script is
// useful to update the repo in case the action fails.

import { cancel, isCancel, select, spinner } from "@clack/prompts"
// Note that this does not respect the .templatesyncignore file, so it will try
// to merge all the changes made to the template. Use with caution if you have
// several files ignored.
import { $ } from "bun"

const s = spinner()

s.start("Checking for template remote...")

const remotes = await $`git remote`.text().then((text) => text.split("\n"))

if (!remotes.includes("template")) {
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
      "Please add the template remote by running the command: `git remote add template git@github.com:adelrodriguez/startline.git`",
    )

    process.exit(0)
  }

  s.start("Adding template remote...")

  await $`git remote add template git@github.com:adelrodriguez/wingman.git`

  s.stop("Template remote added")
} else {
  s.stop("Template remote found")
}

s.start("Fetching template remote...")

await $`git fetch template`

s.stop("Template remote fetched")

s.start("Merging template remote...")

await $`git merge template/main --allow-unrelated-histories --no-commit`

s.stop("Template remote merged. Please resolve any conflicts.")
