# YouTube Style Copy

Look and copy exercise. Good for practicing css / sass skills.

## Custom Hook

I use a custom hook (`src/customHook/useIsWide.jsx`) that returns true or false depending on if the screen is wider than the passed in breakpoint px value.

This is useful for rendering components conditionally based on screen size. I use it to move the video list to the side or bottom.

## [Google Icons](https://fonts.google.com/icons?icon.query=arrow&icon.style=Rounded)

I use the icons from google fonts, I tried to use the most similar to original icons that I could find.

I also get the `Roboto` font from there. This is the font that YouTube uses.

## Favicon

Put the favicon in the `webpack.config.js` in the `HtmlWebpackPlugin` plugin.
