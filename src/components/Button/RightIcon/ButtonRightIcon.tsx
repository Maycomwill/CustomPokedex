import { ElementType } from "react"

interface ButtonRightIconProps{
  icon: ElementType
  size?: number
  color?: string
}

export function ButtonRightIcon({color = "white", size = 24, icon: Icon}: ButtonRightIconProps){
  return(
    <Icon size={size} color={color}/>
  )
}
