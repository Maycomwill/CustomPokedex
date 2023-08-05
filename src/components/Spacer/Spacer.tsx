import { Container } from './styles'

interface SpacerProps{
  className?: string
}

export function Spacer({className}: SpacerProps) {
  return (
    <Container className={className}>
      <div className='spacer'/>
    </Container>
  )
}


