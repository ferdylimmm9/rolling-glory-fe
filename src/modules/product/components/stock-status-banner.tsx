import { ProductType } from "@/api/product/types";
import Assets from "@/constant/assets";

import React from "react";

interface StockStatusBannerProps extends React.ComponentProps<"img"> {
  product: ProductType;
}

export default function StockStatusBanner(props: StockStatusBannerProps) {
  const { product, ...rest } = props;
  const src = React.useMemo(() => {
    const isBestSeller =
      product.attributes.numOfReviews > 25 && product.attributes.rating >= 4;
    const isItemHot = product.attributes.isNew && isBestSeller;
    if (isItemHot) return Assets.itemHot;
    if (product.attributes.isNew) return Assets.new;
    if (product.attributes.numOfReviews > 25 && product.attributes.rating >= 4)
      return Assets.bestSeller;

    return undefined;
  }, [
    product.attributes.isNew,
    product.attributes.numOfReviews,
    product.attributes.rating,
  ]);

  if (src === undefined) return null;

  return (
    <img
      {...rest}
      style={{
        ...style,
        ...rest.style,
      }}
      src={src}
    />
  );
}

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 2,
} as React.CSSProperties;
