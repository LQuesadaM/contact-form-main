import PropTypes from 'prop-types'

export const Paragraph = ({ children }) => {
  return (
    <p className='hidden peer-invalid:block text-redInvalid mt-2 text-sm'>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string
}
