import React from 'react'

import { Modal, Button, Heading, Text, useModal } from 'insites-ui'
import DemoBox from './DemoBox'

const ModalDemo = () => {
  const { isVisible, toggle } = useModal()

  return (
    <DemoBox>
      <Button variant="blank" onClick={toggle}>Open the modal</Button>
      <Modal isVisible={isVisible} onHide={toggle}>
        <Heading size="m" as="h3">
          Delete your organization
        </Heading>
        <Text>
          Are you sure you want to delete your organization? All of your data will be permanently removed. This
          operation cannot be undone.
        </Text>
        <Modal.Footer>
          <Button variant="secondary" size="small" onClick={toggle}>
            Cancel
          </Button>
          <Button variant="primary" size="small" ml="1rem">
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </DemoBox>
  )
}

export default ModalDemo
