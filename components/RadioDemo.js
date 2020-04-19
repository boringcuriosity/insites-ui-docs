import React, { useState } from 'react'
import { Box, Radio } from 'insites-ui'

const RadioDemo = () => {
  const [size, setSize] = useState('L')
  const setSizeL = () => setSize('L')
  const setSizeXL = () => setSize('XL')

  return (
    <>
      <Box mb="2">
        <Radio
          id="sizeL"
          checked={size === 'L'}
          onChange={setSizeL}
        >
          Size L
        </Radio>
      </Box>
      <Radio
        id="sizeXL"
        checked={size === 'XL'}
        onChange={setSizeXL}
      >
        Size XL
      </Radio>
    </>
  )
}

export default RadioDemo
