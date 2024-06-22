import { CaretUp } from 'phosphor-react'
import { Container } from './styles'

function handleScrollTop(e: any){
  e.preventDefault()
  window.scrollTo({top: 0, behavior: 'smooth'})
}

export function BackToTop() {
  return (
    <Container className="back-to-top" onClick={(e)=>handleScrollTop(e)}><CaretUp size={48} /></Container>
  )
}
