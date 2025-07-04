import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import useStore from '../store/useStore';
import useLocalization from '../hooks/useLocalization';
import CompareItem from './CompareItem';

const CompareList = () => {
  const { compareList, clearCompare, toggleCompare } = useStore();
  const { t } = useLocalization();

  if (compareList.length === 0) return null;

  return (
    <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-xl shadow-sm p-4 lg:sticky lg:top-24 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ArrowLeftRight size={18} className="text-blue-500" />
          <h3 className="font-semibold text-gray-900">{t('compareList')}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">({compareList.length}/3)</span>
          <button
            onClick={clearCompare}
            className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
            aria-label={t('clear')}
          >
            {t('clear')}
          </button>
        </div>
      </div>

      {/* Compare Items */}
      <div className="space-y-3 mb-4">
        {compareList.map((product) => (
          <CompareItem
            key={product.id}
            product={product}
            onRemove={toggleCompare}
          />
        ))}
      </div>

      {/* Compare Button */}
      <button
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
        onClick={() => alert('Compared products')}
        aria-label={`${t('compare')} ${compareList.length} products`}
      >
        {t('compare')} ({compareList.length})
      </button>
    </div>
  );
};

export default CompareList;