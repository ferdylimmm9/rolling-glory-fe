import Text, { TextProps } from "@/components/text";
import Assets from "@/constant/assets";
import { formatMoney } from "@/utils/number";

interface PointComponentProps {
  points: number;
  textProps?: TextProps;
  iconWidth?: number;
}

export default function PointComponent(props: PointComponentProps) {
  const { iconWidth = 12, textProps } = props;
  return (
    <div
      id="point-container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <img src={Assets.point} alt="point-icon" width={iconWidth} />
      <Text textColor="--unnamed-color-74b71b" {...textProps}>
        {formatMoney(props.points)} points
      </Text>
    </div>
  );
}
