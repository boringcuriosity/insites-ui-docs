import React from 'react'
import { Dropdown, Button } from 'insites-ui'

const DropdownDemo = () => (
  <Dropdown
    Trigger={() => (
      <Button variant="secondary" size="small">
        Click me
      </Button>
    )}
  >
    Hidden content
  </Dropdown>
)

export default DropdownDemo
