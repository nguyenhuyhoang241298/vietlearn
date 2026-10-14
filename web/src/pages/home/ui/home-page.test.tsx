import { render, screen } from '@testing-library/react'
import { HomePage } from '../index'

test('renders the app title', () => {
  render(<HomePage />)
  expect(screen.getByRole('heading', { name: 'VietLearn' })).toBeInTheDocument()
})
