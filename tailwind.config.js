/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
];
export const theme = {
  extend: {},
};
export const plugins = [require("@tailwindcss/typography"), require("daisyui")];
export const daisyui = {
  themes: ["light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
],
  darkTheme: "black",
  base: true,
  styled: true,
  utils: true,
  prefix: "",
  logs: true,
  themeRoot: ":root",
};
export const darkMode = ['class', '[data-theme="black"]'];

