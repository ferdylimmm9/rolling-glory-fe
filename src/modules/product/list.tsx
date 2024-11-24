import { useGetProducts } from "@/api/product/hooks";
import React from "react";
import ProductItemCard from "./components/product-item-card";
import ProductSort from "./components/sort-selection";
import {
  ProductActionsContext,
  SortTypeEnum,
} from "@/hooks/use-product-actions";
import ProductFilter from "./components/product-filter";
import { useRouter } from "next/router";

export default function ProductList() {
  const { data, isFetching } = useGetProducts({
    page: {
      number: 1,
      size: 20,
    },
  });

  const [sort, setSort] = React.useState<SortTypeEnum>(SortTypeEnum.newest);
  const [isTopRated, setIsTopRated] = React.useState(false);
  const [isStockAvailable, setIsStockAvailable] = React.useState(false);

  const values = React.useMemo(() => {
    return {
      sort,
      setSort,
      isTopRated,
      setIsTopRated,
      isStockAvailable,
      setIsStockAvailable,
    };
  }, [
    sort,
    isTopRated,
    isStockAvailable,
    setSort,
    setIsStockAvailable,
    setIsTopRated,
  ]);

  const products = data?.data
    .filter((product) => {
      const sortRated = product.attributes.rating >= 4;
      const stockAvailable = product.attributes.stock > 0;

      if (isTopRated && isStockAvailable) {
        return sortRated && stockAvailable;
      }
      if (isTopRated) {
        return sortRated;
      }
      if (isStockAvailable) {
        return stockAvailable;
      }

      return true;
    })
    .sort((a, b) => {
      if (sort === SortTypeEnum.newest) {
        return b.attributes.id - a.attributes.id;
      }
      return b.attributes.numOfReviews - a.attributes.numOfReviews;
    });

  const firstTime = React.useRef(false);
  const { prefetch } = useRouter();
  React.useEffect(() => {
    if (firstTime.current) return;
    if (data?.data?.length) {
      Promise.all(
        (data?.data || []).map((product) => prefetch(`/products/${product.id}`))
      );
      firstTime.current = true;
    }
  }, [data?.data, prefetch]);

  if (isFetching) return <span>Loading</span>;

  if (products?.length) {
    return (
      <ProductActionsContext.Provider value={values}>
        <div style={styles.mainContainer}>
          <ProductFilter />
          <div style={styles.rightContainer}>
            <ProductSort />
            <div style={styles.productListContainer}>
              {products.map((product) => {
                return <ProductItemCard product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </ProductActionsContext.Provider>
    );
  }

  return <span>No Data</span>;
}

const styles = {
  productListContainer: {
    display: "grid",
    gridAutoRows: "max-content",
    gridAutoColumns: "max-content",
    gridTemplateColumns: "auto auto auto",
    rowGap: 38,
    columnGap: 22,
    marginBottom: 64,
  } as React.CSSProperties,
  rightContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  } as React.CSSProperties,
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
  } as React.CSSProperties,
};
