import './App.css'
import { MyForm, TasksContainer } from './components'

function App() {

  return (
    <>
      <MyForm></MyForm>
      <TasksContainer status={"pending"}></TasksContainer>
    </>
  )
}

export default App
