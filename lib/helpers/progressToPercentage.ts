const progressToPercentage = (progress: boolean[]) => {
  const isEnds = progress.filter((pro) => pro);
  return ((isEnds.length / progress.length) * 100).toFixed(0);
};

export default progressToPercentage;
