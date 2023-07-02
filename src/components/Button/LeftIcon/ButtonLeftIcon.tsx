import { ElementType } from "react"

interface ButtonLeftIconProps{
  icon: ElementType
  size?: number
  color?: string
}

export function ButtonLeftIcon({color = "white", size = 24, icon: Icon}: ButtonLeftIconProps){
  return(
    <Icon size={size} color={color}/>
  )
}
