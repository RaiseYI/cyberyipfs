import React, { createContext, useContext } from 'react'

type LanguageContextType = {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode, value: LanguageContextType }> = ({ children, value }) => {
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}