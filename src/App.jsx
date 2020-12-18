import React, {useState} from 'react';
import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdowm';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end Javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creatin components'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

const App = () => {
const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Dropdown 
        selected={selected}
        onSelectedChange = {setSelected}
        options={options} />
    </div>
  )
}

export default App;