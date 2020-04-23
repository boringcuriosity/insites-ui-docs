import React, { useState } from 'react'
import { Toggle } from 'insites-ui'

const ToggleDemo = () => {
  const [isToggled, setIsToggled] = useState(false)
  const toggle = () => setIsToggled(!isToggled)

  return (
    <Toggle
      id="notifications"
      checked={isToggled}
      onChange={toggle}
    >
      Receive notifications
    </Toggle>
  )
}

export default ToggleDemo