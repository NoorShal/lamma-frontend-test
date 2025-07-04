import React from 'react';
import { Heart, ArrowLeftRight } from 'lucide-react';
import useStore from '../store/useStore';
import useLocalization from '../hooks/useLocalization';
import useProductPrice from '../hooks/useProductPrice';

const ProductCard = ({ product }) => {
    const { toggleCompare, toggleWishlist, isInWishlist, isInCompare } = useStore();
    const { t, isRTL } = useLocalization();
    const { discountPercentage, priceDisplay } = useProductPrice(product);

    const isLiked = isInWishlist(product.id);
    const inCompare = isInCompare(product.id);

    const renderPrice = () => {
        if (priceDisplay.type === 'simple') {
            return (
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900">
                            {priceDisplay.current}
                        </span>
                        {priceDisplay.original && (
                            <span className="text-sm text-gray-400 line-through">
                                {priceDisplay.original}
                            </span>
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="text-lg font-semibold text-gray-900">
                    {priceDisplay.range}
                </div>
            );
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
            {/* Product Image */}
            <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name[isRTL ? 'ar' : 'en']}
                    className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-3 ltr:right-3 rtl:left-3 flex flex-col items-end gap-1">
                    {product.is_featured && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t('featured')}
                        </span>
                    )}
                    {product.ai_suggested && (
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t('aiSuggested')}
                        </span>
                    )}
                </div>

                {/* Discount Badge */}
                {priceDisplay.hasDiscount && (
                    <div className="absolute top-3 ltr:left-3 rtl:right-3">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {discountPercentage}% {t('off')}
                        </span>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="absolute bottom-3 ltr:right-3 rtl:left-3 flex gap-2">
                    <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isLiked
                            ? 'bg-red-500 text-white shadow-md'
                            : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
                            }`}
                        aria-label={isLiked ? t('removeFromWishlist') : t('addToWishlist')}
                    >
                        <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>

                    <button
                        onClick={() => toggleCompare(product)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${inCompare
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-white/90 text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                            }`}
                        aria-label={inCompare ? t('removeFromCompare') : t('addToCompare')}
                    >
                        <ArrowLeftRight size={16} />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 truncate">
                        {product.name[isRTL ? 'ar' : 'en']}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${product.type === 'simple'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-blue-50 text-blue-700'
                        }`}>
                        {t(product.type)}
                    </span>
                </div>

                {renderPrice()}
            </div>
        </div>
    );
};

export default ProductCard;