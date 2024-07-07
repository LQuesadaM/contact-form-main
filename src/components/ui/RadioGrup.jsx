import PropTypes from 'prop-types'

export const RadioGrup = ({ children, ...props }) => {
  return (
    <label className='mb-3 flex ring-1 ring-gray-400 ring-inset rounded-md shadow-sm py-2.5 px-3 has-[:checked]:bg-greenLighter has-[:checked]:ring-2 has-[:checked]:ring-greenMedium peer hover:cursor-pointer md:w-1/2'>
      <input
        className='mx-3 checked:accent-greenMedium'
        type='radio'
        {...props}
      />
      {children}
    </label>
  )
}

RadioGrup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string
}
