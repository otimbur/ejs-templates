# Cloning this repo to repl

Import this repo to create a starting point for Node.js projects in repl.it.

Once you have a copy of this repo imported, create a Node.js repl that has the same name to keep things straight.

Delete index.js from the repl and clone your repo using a dot (period) at the end of the line to remove sub-folders:

```
git clone https://github.com/username/repo-name.git .
```

Once the repo is successfully cloned, you should be able to run the test index.js file!

## Pushing changes to your repo

Before you can make changes in your repl and push to the repo, you'll need to identify yourself to git:

```
git config user.email "you@example.com"
git config user.name "Your First & Last Name"
```
In the example above, the switch --global is NOT used as repl.it will not support a global command, only a single repo command.

Once you've provided your identity, you should be able to add, commit and push changes:

```
git add .
git commit -m "commit message here"
git push
```

You'll need to enter your credentials unless you want to use repl.it to manage your GitHub identity

### Notes

.gitignore: This prevents node modules, etc. from being stored in the repo.

.replit: This helps repl.it recognize the starting point of the application.
