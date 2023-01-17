// @flow

import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, ModalButton } from 'baseui/modal';
import { LabelLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Markdown } from '@uber/dotcom-ui';
import type { ModalPopupT } from './modal-popup-default';

export const ModalPopupAuthorView = (props: ModalPopupT) => {
  const { header, body, ctaText } = props;
  const [, theme] = useStyletron();

  return (
    <div style={{ maxWidth: '1280px', marginRight: 'auto', marginLeft: 'auto' }}>
      <div style={{ overflow: 'hidden', padding: '64px' }}>
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
        <ModalFooter>{ctaText && <ModalButton>{ctaText}</ModalButton>}</ModalFooter>
      </div>
    </div>
  );
};
