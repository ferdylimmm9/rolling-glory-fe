import Assets from "@/constant/assets";
import useProductActions, { SortTypeEnum } from "@/hooks/use-product-actions";
import React from "react";

import Text from "@/components/text";

interface SelectProps {
  options: { label: string; value: SortTypeEnum }[];
}

function SelectItem(props: React.ComponentProps<"div">) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      {...props}
      style={{
        opacity: hover ? 0.5 : 1,
        cursor: "pointer",
        padding: "8px 12px",
        borderRadius: 8,
        ...props.style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
    </div>
  );
}

export default function Select(props: SelectProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const { sort, setSort } = useProductActions();
  const onChange = (value: SortTypeEnum) => {
    setShowDropdown(false);
    setSort(value);
  };

  const option = props.options.find((item) => item.value === sort)!;

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        id="select"
        style={style.selectContainer}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div
          style={{
            width: 16,
            height: 16,
          }}
        />
        <Text
          style={{
            color: "#9D9D9D",
          }}
        >
          {option.label}
        </Text>
        <img src={Assets.chevronBottom} width={16} />
      </div>
      {showDropdown && (
        <div style={style.optionsContainer}>
          {props.options.map((option) => (
            <SelectItem
              key={option.value}
              onClick={() => onChange(option.value)}
              style={{
                fontWeight: option.value === sort ? 600 : 400,
              }}
            >
              {option.label}
            </SelectItem>
          ))}
        </div>
      )}
    </div>
  );
}

const style = {
  optionsContainer: {
    position: "absolute",
    border: "1px solid #9D9D9D",
    padding: "12px",
    minWidth: 170,
    marginTop: 8,
    right: 0,
    zIndex: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  } as React.CSSProperties,
  selectContainer: {
    border: "1px solid #9D9D9D",
    padding: "10px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 170,
    borderRadius: 999,
    cursor: "pointer",
  } as React.CSSProperties,
};
