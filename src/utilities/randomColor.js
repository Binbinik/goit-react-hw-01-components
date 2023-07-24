export const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + ('000000' + randomColor).slice(-6).toUpperCase();
};
