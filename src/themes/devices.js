const size = {
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px"
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`
};

export { device };
