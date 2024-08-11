// This is a manual script to sync the template with the current repo. It is
// recommended to use the GitHub action included instead, but this script is
// useful to update the repo in case the action fails.

// Note that this does not respect the .templatesyncignore file, so it will try
// to merge all the changes made to the template. Use with caution if you have
// several files ignored.
import { $ } from "bun"

await $`git fetch template`

await $`git merge template/main --allow-unrelated-histories`
