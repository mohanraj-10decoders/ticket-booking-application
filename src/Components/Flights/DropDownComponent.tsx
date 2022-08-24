import React, { Component, Fragment } from 'react';

import Select from 'react-select';
const colourOptions = [
  { label: 'Red', value: 'Red' },
  { label: 'Green', value: 'Green' },
];

export default class SingleSelect extends Component<{}> {
  render() {
    return (
      <Fragment>
        <Select
          className='basic-single'
          classNamePrefix='select'
          defaultValue={colourOptions[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name='color'
          options={colourOptions}
        />

        <div
          style={{
            color: 'hsl(0, 0%, 40%)',
            display: 'inline-block',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: '1em',
          }}
        ></div>
      </Fragment>
    );
  }
}
