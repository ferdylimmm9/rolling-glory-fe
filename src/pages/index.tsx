import ProductList from "@/modules/product/list";
import { DefaultSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <DefaultSeo
        description="Mollit quis ipsum id fugiat ea laboris."
        title={`Rolling Glory - Buy Now | Your eCommerce Site`}
      />
      <ProductList />
    </>
  );
}
