export const formatSubscriber = (num: number): string => {
  if (num >= 1_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(1) + " t"; // Format untuk triliun
  } else if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + " b"; // Format untuk miliar
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + " jt"; // Format untuk juta
  } else if (num >= 100_000) {
    return (num / 1_000).toFixed(0) + " rb"; // Format untuk ribuan
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + " rb"; // Format untuk ribuan dengan satu decimal
  } else {
    return num.toString(); // Format jika kurang dari 1000
  }
};
