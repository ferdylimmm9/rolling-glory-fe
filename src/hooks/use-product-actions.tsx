import React from "react";

export enum SortTypeEnum {
  newest = "newest",
  review = "review",
}

type ProductActionsContextType = {
  sort: SortTypeEnum;
  setSort: React.Dispatch<React.SetStateAction<SortTypeEnum>>;
  isTopRated: boolean;
  setIsTopRated: React.Dispatch<React.SetStateAction<boolean>>;
  isStockAvailable: boolean;
  setIsStockAvailable: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductActionsContext =
  React.createContext<ProductActionsContextType>({
    isStockAvailable: false,
    isTopRated: false,
    setIsStockAvailable() {},
    setIsTopRated() {},
    setSort() {},
    sort: SortTypeEnum.newest,
  });

export function ProductActionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <ProductActionsContext.Provider value={values}>
      {children}
    </ProductActionsContext.Provider>
  );
}

export default function useProductActions() {
  const context = React.useContext(ProductActionsContext);
  return context;
}
