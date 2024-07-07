import PropTypes from 'prop-types'

export const Label = ({ children, ...props }) => {
  return (
    <label className='block leading-10' {...props}>
      {children} <span className='text-greenMedium'>*</span>
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.string
}
