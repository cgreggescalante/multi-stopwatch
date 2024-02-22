const formatMs = (ms: number) => {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);
  const remainingMs = Math.floor((ms % 1000) / 10)
    .toString()
    .padStart(2, "0");

  if (hours) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${remainingMs}`;
  } else if (minutes) {
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${remainingMs}`;
  }

  return `${seconds}.${remainingMs}`;
};

export { formatMs };