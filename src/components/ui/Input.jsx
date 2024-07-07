export const Input = (props) => {
  return (
    <input
      className='block w-full rounded-md shadow-sm py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 cursor-pointer sm:text-sm sm:leading-6 peer invalid:ring-redInvalid invalid:focus:ring-redInvalid'
      required
      {...props}
    />
  )
}
