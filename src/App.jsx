
import './App.css'
import ControlledFild from './components/ControlledField/ControlledFild'
import FormAction from './components/FormAction/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1> Explore react form </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFild/> */}
      <UnControlledField/>
    </>
  )
}

export default App
