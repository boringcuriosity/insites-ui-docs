import React, { useState } from 'react'
import { Checkbox } from 'insites-ui'

const CheckboxDemo = () => {
  const [isChecked, setChecked] = useState(true)
  const toggle = () => setChecked(!isChecked)

  return (
    <Checkbox
      id="rememberMe"
      checked={isChecked}
      onChange={toggle}
    >
      Remember me
    </Checkbox>
  )
}

export default CheckboxDemo