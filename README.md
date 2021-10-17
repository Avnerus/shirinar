# A-Frame Boilerplate with TypeScript

Boilerplate for creating WebVR scenes with [A-Frame](https://aframe.io) using TypeScript. Based on the original 
[aframe-boilerplate](https://github.com/aframevr/aframe-boilerplate) with TypeScript and Webpack goodness added.

[![Hello World](./src/assets/preview.png)](https://sbrudz.github.io/ts-aframe-boilerplate/)

## Developing your scene

The A-Frame best practices recommend putting your application logic in components. This boilerplate sets you up to do that.
The `src/index.ts` file is your entry point to add application logic.  There's currently an example component in there. You
can either modify what's in there or add more components as separate source files and import those into the index.ts file.

To make changes to the HTML, edit the `dist/index.html` file.  

If you have assets to include, such as textures, place them in the `src/assets` directory.  Webpack will serve these assets up
at the `/assets` location.  For example, on your local server, they would be available at `http://localhost:3000/assets`.

## Publishing your scene

If you don't already know, GitHub offers free and awesome publishing of static sites through __[GitHub Pages](https://pages.github.com/)__.

To publish your scene to your personal GitHub Pages:

    npm run deploy

And, it'll now be live at __http://`your_username`.github.io/__ :)

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>

## Still need Help?

### Installation

First make sure you have Node installed.

On Mac OS X, it's recommended to use [Homebrew](http://brew.sh/) to install Node + [npm](https://www.npmjs.com):

    brew install node

To install the Node dependencies:

    npm install


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)


## License

This program is free software and is distributed under an [MIT License](LICENSE).
