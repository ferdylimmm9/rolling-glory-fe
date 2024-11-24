import colors, { ColorType } from "@/constant/colors";
import typography, { TypographyVariantType } from "@/constant/typography";

export interface TextProps extends React.ComponentProps<"div"> {
  textVariant?: TypographyVariantType;
  textColor?: ColorType;
}
export default function Text(props: TextProps) {
  const {
    textVariant = "unnamedCharacterStyle10",
    textColor = "--unnamed-color-262626",
    style,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      style={{
        ...typography[textVariant],
        color: style?.color || colors[textColor],
        ...style,
      }}
    />
  );
}
