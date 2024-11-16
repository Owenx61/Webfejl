import db from "@/utils/db";

//ez adja vissza a productokat a dbből
export const fetchFeatureProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async () => {
  return db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
