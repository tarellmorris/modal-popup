// @flow

import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from 'baseui/modal';
import { LabelLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Markdown } from '@uber/dotcom-ui';
import type { MarkdownBodyType } from '@uber/dotcom-ui';

export type ModalPopupT = {
  header?: string,
  body?: MarkdownBodyType,
  ctaText?: string,
};

export const ModalPopupDefault = (props: ModalPopupT) => {
  const { header, body, ctaText } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const [, theme] = useStyletron();

  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      onClose={handleClose}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      focusLock={false}
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Dialog: {
          style: {
            width: '80vw',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      }}
    >
      <ModalHeader>
        <LabelLarge>{header}</LabelLarge>
      </ModalHeader>
      <div style={{ overflowY: 'auto' }}>
        <ModalBody>
          {body && (
            <Markdown
              body={body}
              overrideStyles={{ color: theme.colors.primaryA }}
              skipOrphanTransform={true}
            />
          )}
        </ModalBody>
      </div>
      <ModalFooter>
        {ctaText && <ModalButton onClick={handleClose}>{ctaText}</ModalButton>}
      </ModalFooter>
    </Modal>
  );
};
