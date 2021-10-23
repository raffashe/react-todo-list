import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id: 1, name: 'estudar sempre', done: false},
    { id: 2, name: 'evoluir todo dia', done: false},
  ]);
  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}
        {list.map((item, index)=>(
          <div>{item.name}</div>
        ))}

      </C.Area>
    </C.Container>
  );

}

export default App;