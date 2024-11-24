import { ProductType } from "@/api/product/types";
import StockStatusQuantity from "./components/stock-status-quantity";
import ProductImage from "./components/product-image";
import StockStatusBanner from "./components/stock-status-banner";
import WishlistAction from "./components/wishlist-action";
import StarComponent from "./components/star-component";
import PointComponent from "./components/point-component";
import ProductQuantity from "./components/product-quantity";
import Button from "@/components/button";
import Text from "@/components/text";
import React from "react";

interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { product } = props;
  return (
    <div>
      <Text
        textColor="--unnamed-color-262626"
        style={{
          marginBottom: 32,
        }}
      >
        List product &gt; {product.attributes.name}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 36,
          maxWidth: 1280,
          margin: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: 32,
            flex: 1,
          }}
        >
          <ProductImage
            style={{
              objectFit: "contain",
            }}
            images={product.attributes.images}
            alt={product.attributes.name}
          />
          <StockStatusBanner
            product={product}
          />
        </div>
        <div
          style={styles.productRightShowRoom}
        >
          <Text textVariant="unnamedCharacterStyle21">
            {product.attributes.name}
          </Text>
          <StarComponent
            numOfReviews={product.attributes.numOfReviews}
            rating={product.attributes.rating}
          />
          <div
            style={styles.pointContainer}
          >
            <PointComponent
              points={product.attributes.points}
              iconWidth={20}
              textProps={{
                textVariant: "unnamedCharacterStyle21",
              }}
            />
            <StockStatusQuantity stock={product.attributes.stock} />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: product.attributes.info,
            }}
          />
          <ProductQuantity product={product} />
          <div
            id="product-detail-actions"
            style={styles.productDetailAction}
          >
            <WishlistAction
              isWishlist={product.attributes.isWishlist}
              productId={product.id}
            />
            <Button style={{ minWidth: 120 }}>Redeem</Button>
            <Button buttonType="secondary" style={{ minWidth: 120 }}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <div style={styles.textContainer}>
        <div id="title-container">
          <Text
            textVariant="unnamedCharacterStyle17"
            textColor="--unnamed-color-74b71b"
          >
            Info produk
          </Text>
          <div style={styles.line} />
        </div>
        <div id="desc-container">
          <Text
            textVariant="unnamedCharacterStyle16"
            textColor="--unnamed-color-006a4e"
            style={styles.rincian}
          >
            Rincian
          </Text>
          <Text
            style={styles.descriptionContainer}
            dangerouslySetInnerHTML={{
              __html: product.attributes.description,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  productRightShowRoom: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 24,
  } as React.CSSProperties,
  pointContainer:{
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  } as React.CSSProperties,
  productDetailAction:{
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  }as React.CSSProperties,
  textContainer: {
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  line: {
    minWidth: 120,
    maxWidth: 120,
    minHeight: 1.5,
    backgroundColor: "#006A4E",
    marginTop: 4,
  } as React.CSSProperties,
  rincian: {
    marginTop: 24,
    marginBottom: 38,
  } as React.CSSProperties,
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    lineHeight: 4,
  } as React.CSSProperties,
};
