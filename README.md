# Figma plugin to create a background behind a text

This plugin is not published on figma.

## How it works roughly

1. Looks if user has selected exactly one text node. If you a dialog for input values is opened.
2. User can input the height (which is set to the text height by default), margin top and left and corner radius. After clicking "Let's go" button the API is listening for a message event which is fired by the frontend and the input values are given with it.
3. Then it creates a rectangle with these input values.
4. It groups the text and rectangle (with the rectangle being under the text so it doesn't hide the text).

## Testing

1. Follow the (Figma Setup Guide)[https://www.figma.com/plugin-docs/setup/].
2. Clone this repository and set it up.
3. Open figma desktop and go to Menu > Plugins > Development > Import Plugin from manifest ...
4. If you want to see your changings reflected start the TypeScript compilation (seee the Figma Setup Guide for further information).
