import { ProductType } from "@/api/product/types";
import StepperInput from "./stepper-input";
import Text from "@/components/text";

interface ProductQuantityProps {
  product: ProductType;
}

export default function ProductQuantity(props: ProductQuantityProps) {
  return (
    <div>
      <Text
        textColor="--unnamed-color-838eab"
        style={{
          marginBottom: 16,
        }}
      >
        Jumlah
      </Text>
      <StepperInput maxValue={props.product.attributes.stock} />
    </div>
  );
}
