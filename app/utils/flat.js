// flattenColorPalette.js

export default function flattenColorPalette(colors) {
    const flattened = {};
  
    for (const color in colors) {
      if (typeof colors[color] === 'object') {
        for (const shade in colors[color]) {
          flattened[`${color}-${shade}`] = colors[color][shade];
        }
      } else {
        flattened[color] = colors[color];
      }
    }
  
    return flattened;
  }
  