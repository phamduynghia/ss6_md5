export const formatmoney = (money) => {
  return money.toLocaleString("en-US", { style: "currency", currency: "VND" });
};
