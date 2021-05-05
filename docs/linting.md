# Linting

The linter is used for two reasons:

- To prevent avoidable errors by guarding certain uses of the language
- To stop arguments over the "right way" to format code. The linters way is right, feel free to argue with a set of cold dispassionate rules.

Linting is ran in a couple of places:

- On check-in, code is auto-fixed at this point
- On build, linting issues are regarded as errors at this point

If you are using vscode I would recommend installing the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions and enabling "Editor: Format on Save" in the settings. With those on the code will be linted as you save.
