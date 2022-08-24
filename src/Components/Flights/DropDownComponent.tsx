import React, { Component, Fragment } from 'react';

import Select from 'react-select';

export default class SingleSelect extends Component<{
  data: { label: string; value: string }[];
}> {
  render() {
    return (
      <Fragment>
        <Select
          className='basic-single'
          classNamePrefix='select'
          //   defaultValue={}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name='color'
          options={this.props.data}
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
