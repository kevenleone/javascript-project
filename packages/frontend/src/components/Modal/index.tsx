import React from 'react'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

const ModalComponent = ({
  toggle, isOpen, title, children, onSubmit, disabled
}): React.ReactChild => (
  <div>
    <Modal isOpen={isOpen} toggle={toggle} size="xl">
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button disabled={disabled} color="primary" onClick={onSubmit}>Save</Button>
      </ModalFooter>
    </Modal>
  </div>
)

export default ModalComponent
