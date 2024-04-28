import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import "./Button.scss"

export default function CustomButton({children , variant, ...props}) {
  return <BootstrapButton className='myBtn' variant={variant} {...props}> 
  {children}
   </BootstrapButton>
   
}
