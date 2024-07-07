import {
  Label,
  Input,
  Button,
  RadioGrup,
  Textarea,
  Paragraph
} from './ui/index.js'
export const ContactForm = () => {
  return (
    <form className='bg-white w-80 rounded-xl p-4 drop-shadow-lg md:w-[700px] md:p-8'>
      <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>

      <section className='md:flex md:gap-4'>
        <div className='mb-3 md:w-1/2'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input type='text' id='firstName' />
          <Paragraph>This field is required</Paragraph>
        </div>

        <div className='mb-3 md:w-1/2'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input type='text' id='lastName' />
          <Paragraph>This fields is required</Paragraph>
        </div>
      </section>

      <div className='mb-3'>
        <Label htmlFor='email'>Email Address</Label>
        <Input type='email' id='email' />
        <Paragraph>Please enter a valid email address</Paragraph>
      </div>

      <fieldset className='mb-3'>
        <legend className='mb-3'>
          Query Type <span className='text-greenMedium'>*</span>
        </legend>

        <div className='peer md:flex md:gap-4'>
          <RadioGrup id='generalEnquiry' name='queryType'>
            General Enquiry
          </RadioGrup>
          <RadioGrup id='supportRequest' name='queryType'>
            Support Request
          </RadioGrup>
        </div>

        <p className='peer-has-[:checked]:hidden text-redInvalid text-sm -mt-1'>
          Please select a query type
        </p>
      </fieldset>

      <div className='mb-5'>
        <Label htmlFor='message'>Message</Label>
        <Textarea id='message' required />
        <Paragraph>This field is required</Paragraph>
      </div>

      <div className='mb-4'>
        <div className='flex gap-3 mb-4 peer'>
          <input
            type='checkbox'
            name='terms'
            id='terms'
            className='checked:accent-greenMedium'
          />
          <label htmlFor='terms' className='leading-5 hover:cursor-pointer'>
            I consent to being contacted by the team
          </label>
        </div>
        <p className='peer-has-[:checked]:hidden text-redInvalid text-sm ml-2 -mt-2 mb-6'>
          To submit this form, please consent to being contacted
        </p>
      </div>

      <Button>Submit</Button>
    </form>
  )
}
