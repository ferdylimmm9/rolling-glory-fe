import Text from "@/components/text";
import useProductActions from "@/hooks/use-product-actions";

export default function ProductFilter() {
  const { isStockAvailable, setIsStockAvailable, isTopRated, setIsTopRated } =
    useProductActions();

  const options = [
    {
      label: "Rating 4 ke atas",
      value: isTopRated,
      onChange: (checked: boolean) => setIsTopRated(checked),
    },
    {
      label: "Stock tersedia",
      value: isStockAvailable,
      onChange: (checked: boolean) => setIsStockAvailable(checked),
    },
  ];

  return (
    <div style={styles.productFilterContainer}>
      <Text
        textColor="--unnamed-color-3c3c3f"
        textVariant="unnamedCharacterStyle9"
        style={styles.label}
      >
        Filter
      </Text>
      <hr />
      <div style={styles.optionsContainer}>
        {options.map((option) => {
          return (
            <div
              key={`${option.label}-${option.value}`}
              style={styles.optionIconContainer}
            >
              <Text textVariant="unnamedCharacterStyle15">{option.label}</Text>
              <input
                type="checkbox"
                checked={option.value}
                onChange={(e) => {
                  option.onChange(e.currentTarget.checked);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  optionIconContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  optionsContainer: {
    border: "1px solid #D8D8D8",
    padding: "24px 16px",
    backgroundColor: "white",
    width: 250,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  } as React.CSSProperties,
  label: {
    height: 46,
    display: "flex",
    alignItems: "center",
  } as React.CSSProperties,
  productFilterContainer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    gap: 22,
  } as React.CSSProperties,
};
