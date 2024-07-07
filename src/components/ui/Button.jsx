import PropTypes from 'prop-types'

export const Button = ({ children, ...props }) => {
  return (
    <button
      className='bg-greenMedium text-white w-full rounded-md py-4 mb-4  hover:bg-[#154036]'
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string
}
