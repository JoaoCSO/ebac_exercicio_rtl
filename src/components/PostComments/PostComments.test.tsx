import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostComments from './index'

test('adiciona dois comentários na lista', () => {
    render(<PostComments />)

    const input = screen.getByTestId('comment-input')
    const button = screen.getByTestId('comment-submit')

    // Primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(button)

    // Segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(button)

    // Verifica se os dois comentários apareceram
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()

    // Também confere que existem exatamente 2 itens na lista
    const items = screen.getAllByTestId('comment-item')
    expect(items).toHaveLength(2)
})
