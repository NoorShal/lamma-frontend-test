import React from 'react';
import { X } from 'lucide-react';
import useLocalization from '../hooks/useLocalization';
import useProductPrice from '../hooks/useProductPrice';

const CompareItem = ({ product, onRemove }) => {
  const { t, isRTL } = useLocalization();
  const { priceDisplay } = useProductPrice(product);

  return (
    <div className="bg-gray-50 rounded-lg p-3 group hover:bg-gray-100 transition-colors">
      <div className="flex gap-3">
        <img
          src={product.image}
          alt={product.name[isRTL ? 'ar' : 'en']}
          className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
            {product.name[isRTL ? 'ar' : 'en']}
          </h4>
          <p className="text-xs text-gray-500 mb-1">
            {t(product.type)}
          </p>
          <div className="text-sm">
            {priceDisplay.type === 'simple' ? (
              <span className="font-semibold text-gray-900">
                {priceDisplay.current}
              </span>
            ) : (
              <span className="font-semibold text-gray-900">
                {priceDisplay.range}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => onRemove(product)}
          className="w-6 h-6 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
          aria-label={t('removeFromCompare')}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default CompareItem;