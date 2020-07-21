const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

    const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style);

    const initialColors = {
      bg: getStyle(html, "--bg"),
      bgPanel: getStyle(html, "--bg-panel"),
      colorHeading: getStyle(html, "--color-headings"),
      colorText: getStyle(html, "--color-text"),
      colorTitle: getStyle(html, "--color-title"),
    }

    const darkMode = {
      bg: "#333333",
      bgPanel: "#434343",
      colorHeading: "#3664FF",
      colorText: "#FFFAFA",
      colorTitle: "#0077FF"
    }

  const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

  const changeColors = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
  }
 
  checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
  })


export default getStyle;
