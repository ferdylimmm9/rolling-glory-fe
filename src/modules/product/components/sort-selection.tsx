import React from "react";
import Select from "./select";
import { SortTypeEnum } from "@/hooks/use-product-actions";
import Text from "@/components/text";

export const productSortOptions = [
  {
    label: "Terbaru",
    value: SortTypeEnum.newest,
  },
  {
    label: "Ulasan",
    value: SortTypeEnum.review,
  },
];

export default function ProductSort() {
  return (
    <>
      <div style={style.container}>
        <Text
          textColor="--unnamed-color-3c3c3f"
          textVariant="unnamedCharacterStyle9"
        >
          Product List
        </Text>
        <div style={style.selectContainer}>
          <div
            style={{
              color: "#9D9D9D",
            }}
          >
            Urutkan
          </div>

          <Select options={productSortOptions} />
        </div>
      </div>

      <hr style={style.horizontal} />
    </>
  );
}

const style = {
  horizontal: {
    marginTop: 24,
    marginBottom: 24,
  } as React.CSSProperties,
  selectContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  } as React.CSSProperties,
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
};
