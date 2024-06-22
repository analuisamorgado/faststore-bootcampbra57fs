import React from "react";
import { Button, Modal as UI_Modal, ModalHeader, ModalBody } from '@faststore/ui'; // Importing components from '@faststore/ui'

interface ModalProps { // Renaming the interface to ModalProps to avoid naming conflict
  title: string;
  description: string;
}

const ModalComponent = () => { // Renaming the component to ModalComponent
  const { modal, openModal } = useUI(); // Assuming useUI() provides modal state and functions

  return (
    <>
      <Button variant="primary" onClick={() => openModal()}>
        Open Modal
      </Button>
      {modal && (
        <UI_Modal> {/* Using UI_Modal instead of Modal to avoid naming conflict */}
          {({ fadeOut }) => (
            <>
              <ModalHeader
                onClose={() => fadeOut()}
                title="Modal Title"
                description="Modal description"
              />
              <ModalBody>
                <p>This is the ModalBody</p>
              </ModalBody>
            </>
          )}
        </UI_Modal>
      )}
    </>
  );
};

export default ModalComponent; // Exporting ModalComponent instead of Modal
