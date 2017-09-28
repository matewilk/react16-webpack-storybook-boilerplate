// react
import React from 'react';

// material-ui
import TextField from 'material-ui/TextField';

class AddressForm extends React.Component {
  render () {
    return (
      <form>
        <TextField
          hintText='Name'
          fullWidth={true}
        />
        <TextField
          hintText='Address'
          fullWidth={true}
        />
        <TextField
          hintText='Post Code'
          fullWidth={true}
        />
        <TextField
          hintText='Country'
          fullWidth={true}
        />
      </form>
    )
  }
}

export default AddressForm;