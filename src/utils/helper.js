// Format Currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

// Format Date
export const formatDate = (dateStr) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateStr);
};

// Calculate Time
export const calcMinuteLeft = (minuteStr) => {
  const d1 = new Date().getTime();
  const d2 = new Date(minuteStr).getTime();
  return Math.round((d2 - d1) / 60000);
};
