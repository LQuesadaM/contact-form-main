import PropTypes from 'prop-types'

export const Textarea = ({ children, ...props }) => {
  return (
    <textarea
      className='w-full p-3 -mb-2 min-h-56 ring-1 ring-inset ring-gray-400 rounded-md resize-none focus:outline-none invalid:ring-redInvalid peer md:min-h-24'
      {...props}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  children: PropTypes.string
}
