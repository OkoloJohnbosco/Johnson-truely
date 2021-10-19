import React, {useReducer} from 'react';
import {Button} from '@chakra-ui/react';
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};

    case 'decrement':
      return {...state, count: state.count - 1};

    default:
      return state;
  }
};

function All () {
  const [state, dispatch] = useReducer (reducer, initialState);
  return (
    <div
      style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}
    >
      <p>
        <Button onClick={() => dispatch ({type: 'increment', payload: 5})}>
          increment by 5
        </Button>
      </p>
      <h2>{state.count}</h2>
      <p>
        <Button onClick={() => dispatch ({type: 'decrement'})}>
          decrement by 1
        </Button>
      </p>
    </div>
  );
}

export default All;
