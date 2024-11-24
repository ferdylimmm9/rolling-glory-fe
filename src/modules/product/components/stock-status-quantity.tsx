import React from "react";

interface StockStatusQuantityProps {
  stock: number;
  isHover?: boolean;
}

export default function StockStatusQuantity(props: StockStatusQuantityProps) {
  const metadata = React.useMemo(() => {
    if (props.stock <= 0) {
      return {
        label: "Sold out",
        color: "#E64580",
      };
    }

    if (props.stock < 5) {
      return {
        label: "Stock < 5",
        color: "#E64580",
      };
    }

    return {
      label: "In stock",
      color: props.isHover ? "#FFFFFF" :"#79B625",
    };
  }, [props.isHover, props.stock]);

  return (
    <span
      style={{
        color: metadata.color,
        position: "relative",
        zIndex: 3,
      }}
    >
      {metadata.label}
    </span>
  );
}
