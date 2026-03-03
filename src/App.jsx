import React from 'react'
import JsxExpression from './concepts/jsxexpression/JsxExpression'
import ConditionalRendering from './concepts/conditionalrendring/ConditionalRendering'
import TernaryRender from './concepts/conditionalrendring/TernaryRender'
import "./index.css"
// import HomePage from './concepts/props/PropsHomepage'
import PropsHomepage from './concepts/props/PropsHomepage'
import PropsTaskHome from './concepts/props/propstask/PropsTaskHome'
import ReactIcons from './concepts/iconsimplimentation/ReactIcons'
import HooksHome from './concepts/hooks/HooksHome'
import ReactFragments from './concepts/fragments/ReactFragments'
import ListAndKeys from './concepts/listandkeys/ListAndKeys'
import FormHandlingHome from './concepts/formhandling/FormHandlingHome'
import { ToastContainer } from 'react-toastify'
import AxiosConcept from './concepts/axiosconcepts/AxiosConcept'
import TailwindCSSConcept from './concepts/tailwindcssconcept/TailwindCSSConcept'
import RouterLayout from './concepts/reactrouting/RouterLayout'
import PropsDrilling from './concepts/propdrilling/PropsDrilling'
import ContextAPI from './concepts/contextapi/ContextAPI'
import HOC from './concepts/hoc/HOC'
import Optimization from './concepts/optimization/Optimization'

const App = () => {
  return (
    <div className='app'>
      {/* <JsxExpression/> */}
      {/* <ConditionalRendering/> */}
      {/* <TernaryRender/> */}
      {/* <PropsHomepage/> */}
      {/* <PropsTaskHome/> */}
      {/* <ReactIcons/> */}
      <HooksHome/>
      {/* <ReactFragments/> */}
      {/* <ListAndKeys/> */}
      {/* <FormHandlingHome/> */}
      {/* <AxiosConcept/> */}
      {/* <TailwindCSSConcept/> */}
      {/* <RouterLayout/> */}
      {/* <PropsDrilling/> */}
      {/* <ContextAPI/> */}
      {/* <HOC/> */}


      {/* <Optimization/> */}
      <ToastContainer/>
      
    </div>
  )
}

export default App