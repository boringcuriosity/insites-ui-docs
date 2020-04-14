import React from 'react'
import { Box } from 'insites-ui'

const DemoBox = ({ children }) => (
  <Box
    border="1px #DEE2E7 solid"
    borderRadius="0.25rem"
    marginBottom="1rem"
    p="2rem"
  >
    {children}
  </Box>
)

export default DemoBox
