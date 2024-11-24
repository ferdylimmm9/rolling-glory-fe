import { ProductType } from "@/api/product/types";
import { useRouter } from "next/router";
import React from "react";

interface ProductItemCardOverlayProps {
  product: ProductType;
}

export default function ProductItemCardOverlay(
  props: ProductItemCardOverlayProps
) {
  const { push } = useRouter();
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.name}>{props.product.attributes.name}</div>
        <div
          style={styles.viewButton}
          onClick={() => push(`/products/${props.product.id}`)}
        >
          View detail
        </div>
      </div>
    </div>
  );
}

const styles = {
  viewButton: {
    marginTop: 36,
    border: "1px solid #FFFFFF",
    color: "#FFFFFF",
    width: "80%",
    margin: "64px auto 0px",
    padding: 8,
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    gap: 16,
    cursor: "pointer",
  } as React.CSSProperties,
  name: {
    color: "#FFFFFF",
    margin: "auto",
  } as React.CSSProperties,
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 36,
    flex: 1,
  } as React.CSSProperties,
  container: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#74B71B",
    zIndex: 2,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  } as React.CSSProperties,
};
