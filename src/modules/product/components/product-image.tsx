import Assets from "@/constant/assets";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductImageProps extends React.ComponentProps<"img"> {
  images: string[];
  isHome?: boolean;
}

export default function ProductImage(props: ProductImageProps) {
  const { isHome, images, ...rest } = props;
  if (isHome) {
    const src = images?.[0] || "";
    return (
      <img
        src={src}
        alt={props.alt}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = Assets.noImage;
        }}
        {...rest}
      />
    );
  }

  return (
    <Swiper className="mySwiper">
      {images.map((image, index) => {
        return (
          <SwiperSlide key={image}>
            <img
              key={image}
              src={image}
              alt={`${props.alt}-${index}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = Assets.noImage;
              }}
              {...rest}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
