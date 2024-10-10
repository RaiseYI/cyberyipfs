import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const AssetAllocation = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const assets = [
    { name: 'Stocks', percentage: 45, color: 'bg-blue-500' },
    { name: 'Bonds', percentage: 30, color: 'bg-green-500' },
    { name: 'Real Estate', percentage: 15, color: 'bg-yellow-500' },
    { name: 'Cash', percentage: 10, color: 'bg-red-500' },
  ]

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium">{t.assetAllocation}</h3>
        <div className="mt-5">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="flex">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center mr-4">
                    <div className={`w-3 h-3 ${asset.color} rounded-full mr-2`}></div>
                    <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{asset.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-4 mb-4 overflow-hidden bg-gray-200 rounded">
              {assets.map((asset, index) => (
                <div
                  key={index}
                  style={{ width: `${asset.percentage}%` }}
                  className={`${asset.color} rounded-r`}
                ></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {assets.map((asset, index) => (
              <div key={index} className="flex justify-between">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{asset.name}</span>
                <span className="font-medium">{asset.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetAllocation