# generator-rcd (React Component Directory)

> A [Yeoman](http://yeoman.io/) generator for authoring a React component + related files in its own directory

## Why?
When writing React components, I prefer to keep any and all related files grouped together in a single directory. This includes:

 * the component itself
 * tests for the component
 * a [react-storybook](https://storybook.js.org/) story for the component
 * an `index.js` that exports the component to make it easy to reference it

This generator aims to be a super low-friction way to auto-generate as much of this boilerplate as possible.

## Usage
If you haven't already, install the Yeoman cli:

```bash
yarn global add yo
```

Then install this generator:

```bash
yarn global add generator-rcd
```

Then, `cd` into the directory in your project where you keep your React components, and run:

```bash
yo rcd MyComponentName
```

...and you'll get an output like this:

```
create MyComponentName/MyComponent2.js
create MyComponentName/index.js
create MyComponentName/MyComponent2.test.js
create MyComponentName/MyComponent2.story.js
```

That's it!

## What's Next?
Eventually I plan to add a few command line flags to do things like:

 * exclude a particular file
 * make a class-based component instead of a functional one
 * auto-generate a basic Jest snapshot test (?)
 * ???

Suggestions/PRs welcome!