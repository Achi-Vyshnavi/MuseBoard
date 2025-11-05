
export const logRequest = (req) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
};
