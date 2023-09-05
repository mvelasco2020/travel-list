import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Form from './components/form';
import List from './components/list';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  const itemCount = items.length
  const packedItems = items.filter(item => item.packed === true)
  const percentage = (packedItems.length / items.length) * 100
  console.log(percentage)

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleRemoveItems(item) {
    setItems((items) => items.filter(currentItem => currentItem.id !== item.id))
  }

  function handleToggle(id) {
    setItems(items =>
      items.map(currentItem =>
        currentItem.id === id ? { ...currentItem, packed: !currentItem.packed }
          : currentItem)
    )
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <div className="App">
      <Header></Header>
      <Form onAddItems={handleAddItems}></Form>
      <List items={items} onDeleteItem={handleRemoveItems} onToggle={handleToggle} handleClearItems={handleClearItems}></List>
      <Footer itemCount={itemCount} packedItems={percentage}></Footer>
    </div>
  );
}

export default App;
