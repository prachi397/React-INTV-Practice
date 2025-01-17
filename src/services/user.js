export const userService = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { data: { name: "Prachi", id: 1234 } };
};
