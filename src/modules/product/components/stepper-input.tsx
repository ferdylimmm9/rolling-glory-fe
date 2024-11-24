import Text from "@/components/text";
import React from "react";

interface StepperInputProps {
  value?: number;
  maxValue?: number;
}

export default function StepperInput(props: StepperInputProps) {
  const [stock, setStock] = React.useState(0);
  const minValue = stock <= 0;
  const maxValue =
    typeof props.maxValue === "number" ? stock >= props.maxValue : false;

  const onIncrease = () => {
    if (maxValue) return;
    setStock((stock) => stock + 1);
  };

  const onDecrease = () => {
    if (minValue) return;
    setStock((stock) => stock - 1);
  };

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          cursor: minValue ? "not-allowed" : "pointer",
          opacity: minValue ? 0.5 : 1,
        }}
        onClick={onDecrease}
      >
        -
      </button>
      <Text
        textVariant="unnamedCharacterStyle17"
        textColor="--unnamed-color-525f7f"
      >
        {stock}
      </Text>
      <button
        style={{
          ...styles.button,
          cursor: maxValue ? "not-allowed" : "pointer",
          opacity: maxValue ? 0.5 : 1,
        }}
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}

const styles = {
  button: {
    width: 32,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    color: "black",
    fontSize: 24,
  } as React.CSSProperties,
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  } as React.CSSProperties,
};
