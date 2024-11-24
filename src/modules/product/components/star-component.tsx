import Text from "@/components/text";
import React from "react";

interface StarComponentProps {
  rating: number;
  numOfReviews: number;
}

export default function StarComponent(props: StarComponentProps) {
  return (
    <div id="star-container" style={style.container}>
      <div
        className="Stars"
        style={
          {
            "--rating": props.rating.toString(),
          } as any
        }
      />
      <Text textColor="--unnamed-color-838eab">
        {props.numOfReviews} reviews
      </Text>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    flexWrap: "wrap",
  } as React.CSSProperties,
};
