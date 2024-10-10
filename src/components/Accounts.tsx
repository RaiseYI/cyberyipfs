import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const Accounts = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const accounts = [
    { name: 'Checking Account', balance: 5280.32, type: 'Bank' },
    { name: 'Savings Account', balance: 12750.89, type: 'Bank' },
    { name: 'Investment Portfolio', balance: 74798.01, type: 'Investment' },
    { name: 'Credit Card', balance: -1523.45, type: 'Credit' },
    { name: 'Retirement Fund', balance: 98654.32, type: 'Investment' },
  ]

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      <h1 className="text-3xl font-bold mb-6">{t.accounts}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t.accountBalances}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account, index) => (
                <TableRow key={index}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.type}</TableCell>
                  <TableCell className={account.balance < 0 ? 'text-negative' : 'text-green-600'}>
                    ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Accounts