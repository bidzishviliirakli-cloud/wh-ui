import React from 'react'
import Button from '../button/Button'
import { BoxStyles } from './PublishStyles'

export default function PublishBox() {
  return (
    <BoxStyles>
      <h1>Publish a featured property</h1>
      <Button color='black' text='Browse packages' to='/' />
    </BoxStyles>
  )
}
