import { ProductType } from "@/api/product/types";
import ProductImage from "./product-image";
import StockStatusBanner from "./stock-status-banner";
import StockStatusQuantity from "./stock-status-quantity";

import WishlistAction from "./wishlist-action";
import React from "react";
import ProductItemCardOverlay from "./product-item-card-overlay";
import PointComponent from "./point-component";
import StarComponent from "./star-component";

interface ProductItemCardProps {
  product: ProductType;
}

export default function ProductItemCard(props: ProductItemCardProps) {
  const [isHover, setIsHover] = React.useState(false);
  const isSoldout = props.product.attributes.stock <= 0;
  return (
    <div
      onMouseEnter={isSoldout ? undefined : () => setIsHover(true)}
      onMouseLeave={isSoldout ? undefined : () => setIsHover(false)}
      style={styles.container}
    >
      {isSoldout && <div style={styles.soldoutOverlay} />}
      {isHover && <ProductItemCardOverlay product={props.product} />}
      {!isSoldout && <StockStatusBanner product={props.product} />}
      <StockStatusQuantity
        stock={props.product.attributes.stock}
        isHover={isHover}
      />
      <ProductImage
        isHome
        images={props.product.attributes.images}
        alt={props.product.attributes.name}
        width={166}
        height={166}
        style={styles.productImage}
      />

      <div>{props.product.attributes.name}</div>
      <div id="item-meta-container" style={styles.itemMetaContainer}>
        <div id="item-meta-information-container">
          <PointComponent points={props.product.attributes.points} />
          <StarComponent
            numOfReviews={props.product.attributes.numOfReviews}
            rating={props.product.attributes.rating}
          />
        </div>

        <WishlistAction
          isWishlist={props.product.attributes.isWishlist}
          productId={props.product.id}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    border: "1px solid #D8D8D8",
    backgroundColor: "white",
    borderRadius: 8,
    paddingTop: 24,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 38,
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  soldoutOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#E1E8EE",
    zIndex: 1,
    opacity: 0.7,
  } as React.CSSProperties,
  productImage: {
    objectFit: "contain",
    width: 166,
    height: 166,
    margin: "auto",
    marginBottom: 16,
  } as React.CSSProperties,
  itemMetaContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  } as React.CSSProperties,
};
