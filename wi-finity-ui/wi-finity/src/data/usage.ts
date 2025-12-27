export const usageData = Array.from({ length: 24 }, (_, i) => {
  return {
    time: `${i}:00`,
    upload: Math.round(Math.random() * 60 + 5),
    download: Math.round(Math.random() * 300 + 20),
    perDevice: {
      "1": Math.round(Math.random() * 100),
      "2": Math.round(Math.random() * 80),
      "3": Math.round(Math.random() * 200),
      "4": Math.round(Math.random() * 40),
      "5": Math.round(Math.random() * 30)
    }
  };
});