import './App.css'
import InputField from './components/InputField'

function App() {
  const sampleOptions = [
    { id: "1", name: "option 1", value: "option1" },
    { id: "2", name: "option 2", value: "option2" },
    { id: "3", name: "option 3", value: "option3" },
    { id: "4", name: "option 4", value: "option4" },

  ]

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {/* Input Field with prefilled and disabled state */}
        <InputField type='text' placeholder='value from parent' inputTitle='Disbabled state' maxLength={4} minLength={2} prefilledValue='value from parent' disabled={true} required />
        {/* Input with Edit state*/}
        <InputField type='text' placeholder='value from parent' inputTitle='Edit state' prefilledValue='value from parent' required />
        {/* Input with min and max length*/}
        <InputField type='text' inputTitle='Input with min and max length' maxLength={4} minLength={2} required />
        {/* Input with create state along with label and label style */}
        <InputField type='text' placeholder='testing label and label style' inputTitle='Input field label' labelStyle={{ color: "green" }} required />
        {/* Input Field with error and error. TODO: we can remove error prop since error message will only be present if error occur. so basically from error message itself we can manae error state */}
        <InputField type='text' placeholder='testing error' inputTitle='Input field with error' error={true} errorMessage='show error message only when error prop is true' required />
        {/* Input Field with regex */}
        <InputField type='text' placeholder='testing regex for Three letter country code eg: Ind' inputTitle='Input field with regex' regex='[A-Za-z]{3}' required />
        {/* Dropdown */}
        <InputField type='select' options={sampleOptions} inputTitle='Input of type select' />
        {/* Currency input field */}
        <InputField type='currency' inputTitle='Input of type currency' />

        {/* TODO: customChangeFunction functionality is not very clear so as dicussed in call for now it will get input value from Inputfield component  */}
        <InputField type='text' inputTitle='Input of custom change function' customChangeFunction={(val) => console.log(val)} />
        <button type='submit'> Submit button</button>
      </form>
    </>
  )
}

export default App
