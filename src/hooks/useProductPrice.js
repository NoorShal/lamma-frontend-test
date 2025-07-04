import { useMemo } from 'react';
import useLocalization from './useLocalization';

const useProductPrice = (product) => {
  const { t } = useLocalization();

  const discountPercentage = useMemo(() => {
    if (product.original_price && product.price) {
      return Math.round(((product.original_price - product.price) / product.original_price) * 100);
    }
    return 0;
  }, [product.original_price, product.price]);

  //use memo to prevent recalculating prices on every render
  const priceDisplay = useMemo(() => {
    if (product.type === 'simple') {
      return {
        type: 'simple',
        current: `${product.price} ${t('bhd')}`,
        original: product.original_price ? `${product.original_price} ${t('bhd')}` : null,
        hasDiscount: discountPercentage > 0
      };
    } else {
      const prices = product.variations?.map(v => v.price) || [];
      if (prices.length === 0) {
        return {
          type: 'variable',
          range: `0 ${t('bhd')}`,
          hasDiscount: false
        };
      }
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      return {
        type: 'variable',
        range: `${t('from')} ${minPrice} ${t('to')} ${maxPrice} ${t('bhd')}`,
        hasDiscount: false
      };
    }
  }, [product, t, discountPercentage]);

  return {
    discountPercentage,
    priceDisplay
  };
};

export default useProductPrice;