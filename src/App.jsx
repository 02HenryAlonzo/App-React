import React, { useState } from 'react'
import { Input } from './components/InputAmout/Input'
import { Amount } from './components/InputAmout/Amount'
import { StarMenu } from './components/StartMenu/StarMenu'
import { Category } from './components/Category/Category'
import { AddCategory } from './components/AddCategory/AddCategory'
import { Reports } from './components/Reports/Reports_s'



function App() {
  const [isOpen, setIsOpen] = useState('menu')
  
  return (
    <>
      {/* {isOpen === 'menu' && <StarMenu onNavigate={setIsOpen} />}
      {/* <AddCategory /> */}
      {isOpen === 'menu' && <StarMenu onNavigate={setIsOpen} />}
      {isOpen === 'input' && <Input />}
      {isOpen === 'amount' && <Amount />}
      {isOpen === 'category' &&  <Category/>}
      /*<Reports/>*/
    </>
  )
}

export default App