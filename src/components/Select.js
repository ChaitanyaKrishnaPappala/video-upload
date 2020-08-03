import React from 'react'
import ReSelect from 'react-select'
import PropTypes from 'prop-types'
const Select = ({isMulti = false, options, value, setValue}) => {
  return (
    <ReSelect
      style={{backgroundColor: 'black'}}
      value={value}
      onChange={setValue}
      isMulti={isMulti}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        color: '#000',
        colors: {
          ...theme.colors,
          text: 'black',
          primary25: 'skyblue',
          primary: 'black'
        }
      })}
    />)
}

Select.propTypes = {
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.array,
  setValue: PropTypes.func
}

export default Select
