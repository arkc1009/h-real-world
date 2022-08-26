const getDateDiff = (d1: Date, d2: Date) => {
  const diffDate = d2.getTime() - d1.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
};

export default getDateDiff;
