# YouTube Style Copy

Look and copy exercise. for practicing css / sass skills.

I wanted to practice my CSS / SASS. Its just a static page, it doesn't currently do anything (apart from the responsive layout). I was trying to get it as similar as I could, I was looking at YouTube on my tablet as a reference.

[Live Version](https://tomahawk-jupiter.github.io/youtube-mock/)

## Setup

I setup React / Webpack without using create-react-app. There are notes in NOTES.md on how I did this with some helpful links. I also set it up to work with SASS.

## Custom Hook

I use a custom hook (`src/customHook/useIsWide.jsx`) that returns true or false depending on if the screen is wider than the passed in breakpoint px value.

This is useful for rendering components conditionally based on screen size. I use it to move the video list to the side or bottom. I really like this hook!

## [Google Icons](https://fonts.google.com/icons?icon.query=arrow&icon.style=Rounded)

I use the icons from google fonts, I tried to use the most similar to original icons that I could find.

I also get the `Roboto` font from there. I think this is the font that YouTube uses.

## Favicon

Put the favicon in the `webpack.config.js` in the `HtmlWebpackPlugin` plugin.
