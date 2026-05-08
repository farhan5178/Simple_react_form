
import './App.css'
import ControlledFild from './components/ControlledField/ControlledFild'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1> Explore react form </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFild/> */}
      {/* <UnControlledField/> */}
      <HookForm/>
    </>
  )
}

export default App
