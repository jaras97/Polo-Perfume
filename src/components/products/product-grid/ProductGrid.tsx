import { Product } from "@/interfaces";

import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 px-2 lg:grid-cols-3 gap-2 lg:gap-10 mb-10 lg:border-x ">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
