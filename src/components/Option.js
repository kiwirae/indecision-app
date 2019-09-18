import React from 'react'

export default (props) => (
  <div className='option'>
    <p className='option__text'>{props.count}. {props.option}</p>
    <button
      onClick={() => {
        props.handleRemoveOption(props.option)
      }}
      className='button button--link'
    >
      Remove
    </button>
  </div>
)