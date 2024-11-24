import { Product } from "@/api/product/query";
import { ProductType } from "@/api/product/types";
import ProductDetail from "@/modules/product/detail";
import { GetServerSideProps } from "next";
import { NextSeo, ProductJsonLd } from "next-seo";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.query?.id as string;
    const product = (await Product.getDetail(id)).data;
    return {
      props: {
        product,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default function ProductPage({ product }: { product: ProductType }) {
  const {
    id,
    type,
    attributes: {
      name,
      info,
      description,
      points,
      stock,
      images,
      rating,
      numOfReviews,
    },
  } = product;

  const productUrl = `https://www.yoursite.com/product/${id}`;
  const productImage = images.length > 0 ? images[0] : "";
  return (
    <>
      <NextSeo
        title={`${name} - Buy Now | Your eCommerce Site`}
        description={info || description}
        canonical={productUrl}
        openGraph={
          {
            type: "product",
            url: productUrl,
            title: `${name} - ${type}`,
            description: info || description,
            images: images.map((imageUrl) => ({
              url: imageUrl,
              alt: `${name} image`,
            })),
            product: {
              brand: "Your Brand Name",
              price: {
                amount: points,
                currency: "USD",
              },
              rating: rating,
              reviewCount: numOfReviews,
              stock: stock,
            },
          } as unknown as any
        }
        twitter={
          {
            cardType: "summary_large_image",
            title: `${name} - ${type}`,
            description: info || description,
            image: productImage,
          } as any
        }
      />
      <ProductJsonLd
        productName={name}
        images={images}
        description={description}
        brand="Your Brand Name"
        offers={{
          price: points,
          priceCurrency: "USD",
          availability:
            stock > 0
              ? "http://schema.org/InStock"
              : "http://schema.org/OutOfStock",
          url: productUrl,
        }}
        aggregateRating={{
          ratingValue: rating.toString(),
          reviewCount: numOfReviews.toString(),
        }}
      />
      <ProductDetail product={product} />
    </>
  );
}
