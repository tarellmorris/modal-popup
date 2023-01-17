// @flow

import { FIELD_TYPES, FIELD_CATEGORIES } from '@uber/component-common';

export const schema = {
  title: 'Modal Pop-up',
  fields: [
    {
      field: 'header',
      label: 'Header',
      required: false,
      charCountSoftWarning: 75,
      charCountHardWarning: 100,
      type: FIELD_TYPES.TEXT_LINE,
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'body',
      label: 'Body',
      required: false,
      charCountSoftWarning: 5000,
      charCountHardWarning: 7000,
      type: FIELD_TYPES.MARKDOWN,
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'ctaText',
      label: 'CTA text',
      required: false,
      type: FIELD_TYPES.TEXT_LINE,
      category: FIELD_CATEGORIES.CONTENT,
    },
  ],
};
