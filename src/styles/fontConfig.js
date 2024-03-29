import WestonFree from "../assets/fonts/Weston-Free.woff";
import NHaasGroteskTXPro from "../assets/fonts/NHaasGroteskTXPro-55Rg.woff";

export const fontStyleWeston = {
  fontFamily: "Weston Free",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
      local(Weston Free'),
      url(${WestonFree}) format('woff')
    `
  // unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
export const fontStyleNHaas = {
  fontFamily: "Neue Haas Grotesk Text Pro Roman",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
      local('Neue Haas Grotesk Text Pro Roman'),
      url(${NHaasGroteskTXPro}) format('woff')
    `
  // unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
