import React from 'react';
import ModalPopup from '../index';
import { render } from '@testing-library/react';

describe('ModalPopup component', () => {
  it('should match snapshot', () => {
    const component = render(<ModalPopup />);
    expect(component).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body
          style="overflow: hidden;"
        >
          <div />
          <div>
            <div
              data-focus-guard="true"
              style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"
              tabindex="-1"
            />
            <div
              data-focus-lock-disabled="disabled"
            >
              <div
                class=""
                data-baseweb="modal"
              >
                <div
                  class=""
                >
                  <div
                    aria-label="dialog"
                    aria-modal="true"
                    class=""
                    role="dialog"
                    tabindex="-1"
                  >
                    <div
                      class=""
                    >
                      <div
                        class=""
                        data-baseweb="typo-labellarge"
                      />
                    </div>
                    <div
                      style="overflow-y: auto;"
                    >
                      <div
                        class=""
                      />
                    </div>
                    <div
                      class=""
                    />
                    <button
                      aria-label="Close"
                      class=""
                    >
                      <svg
                        height="10"
                        style="stroke: currentColor;"
                        viewBox="0 0 10 10"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                          stroke-linecap="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-focus-guard="true"
              style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"
              tabindex="-1"
            />
          </div>
        </body>,
        "container": <div />,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
