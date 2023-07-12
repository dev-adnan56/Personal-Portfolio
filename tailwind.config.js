const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 -21px 21px 10px rgba(255,255,255)',
        'footer': '0 8px 17px 0px rgb(255,255,255)'
      },
    },
    screens: {
      'sm_md': '750px',
      'x-sm': '300px'
    }
  },
  plugins: [],
});
