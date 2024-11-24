import typography from "@/constant/typography";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  buttonType?: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  const { buttonType = "primary" } = props;
  const [hover, setHover] = React.useState(false);

  const metastyles = React.useMemo(() => {
    switch (buttonType) {
      case "primary":
        return {
          backgroundColor: "#649C1A",
          color: "#FFFFFF",
        } as React.CSSProperties;
      case "secondary":
        return {
          backgroundColor: "#FFFFFF",
          color: "#74B71B",
          border: "1px solid #74B71B",
        } as React.CSSProperties;
    }
  }, [buttonType]);

  return (
    <button
      {...props}
      style={{
        ...styles.button,
        ...props.style,
        ...metastyles,
        opacity: hover ? 0.8 : 1,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

const styles = {
button: {
    height: 32,
    outline: "none",
    border: "1px solid transparent",
    padding: "4px 8px",
    borderRadius: 999,
    minWidth: 100,
    ...typography["unnamedCharacterStyle10"],
  } as React.CSSProperties,
};
