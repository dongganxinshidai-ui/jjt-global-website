export interface IMarket {
  id: string
  region: string
  countries: string
  highlight: string
  exportYears: number
}

export const MOCK_MARKETS: IMarket[] = [
  {
    id: '1',
    region: 'Africa',
    countries: 'Nigeria, Ghana, Kenya, South Africa',
    highlight: 'Largest export destination',
    exportYears: 12,
  },
  {
    id: '2',
    region: 'Central Asia',
    countries: 'Kazakhstan, Uzbekistan, Turkmenistan',
    highlight: 'Growing infrastructure demand',
    exportYears: 8,
  },
  {
    id: '3',
    region: 'Southeast Asia',
    countries: 'Vietnam, Philippines, Indonesia',
    highlight: 'Rapid industrial growth',
    exportYears: 10,
  },
  {
    id: '4',
    region: 'Russia',
    countries: 'Moscow, Siberia, Far East',
    highlight: 'Strong machinery demand',
    exportYears: 9,
  },
  {
    id: '5',
    region: 'Middle East',
    countries: 'UAE, Saudi Arabia, Qatar',
    highlight: 'Construction boom market',
    exportYears: 7,
  },
]
