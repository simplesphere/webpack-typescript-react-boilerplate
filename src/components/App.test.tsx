import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

it('renders main app', () => {
  render(<App />)
  const heroText = screen.getByText('Hero Area')
  expect(heroText).toBeInTheDocument()
})
