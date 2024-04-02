import React from 'react';
import '../styles/components/TextInput.scss';

function TextInput({props}) {
  return (
    <div>
      <input className='input' type="text" {...props} />
    </div>
  )
}

export default TextInput
