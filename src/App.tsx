import React from 'react';
import logo from './logo.svg';
import './App.css';


type MyType = IntrinsicAttributes & IListItem[];
interface IListItem {
  id: string;
  firstname: string;
  lastname: string;
  year: number;
  key?: any;
}

function App() {
  const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
  ];

  const ListItem = (item: {i: IListItem}) => (
    <li>
      <div>{item.i.id}</div>
      <div>{item.i.firstname}</div>
      <div>{item.i.lastname}</div>
      <div>{item.i.year}</div>
    </li>
  );
  const List = (list: IListItem[]) => (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the family goals app.
        </p>
        <div className="goals">
          <p>hello</p>
          <List list={...list}/>
          // <ListItem key={item.id} item={item} />
          <List {...list} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
