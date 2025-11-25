const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
const API_VERSION = import.meta.env.VITE_API_VERSION;

const buildApiUrl = (endpoint: string): string => {
  return `${API_DOMAIN}/api/${API_VERSION}${endpoint}`;
};

export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  const url = buildApiUrl(endpoint);
  return fetch(url, options);
};

export { buildApiUrl };