import { useWishlistProduct } from "@/api/product/mutation";
import Assets from "@/constant/assets";
import React from "react";

interface WishlistActionProps {
  isWishlist: 0 | 1;
  productId: string;
}

export default function WishlistAction(props: WishlistActionProps) {
  const [isWishlist, setIsWishlist] = React.useState(props.isWishlist === 1);
  const src = React.useMemo(() => {
    if (isWishlist) {
      return Assets.wishlisted;
    }
    return Assets.wishlist;
  }, [isWishlist]);
  const { mutateAsync } = useWishlistProduct(props.productId);
  const onWishlist = React.useCallback(async () => {
    try {
      await mutateAsync();
      setIsWishlist(!isWishlist);
    } catch {}
  }, [isWishlist, mutateAsync]);

  return (
    <img
      src={src}
      alt="wishlist-icon"
      onClick={onWishlist}
      style={{
        cursor: "pointer",
        position: "relative",
        zIndex: 5,
        width: 54,
      }}
    />
  );
}
