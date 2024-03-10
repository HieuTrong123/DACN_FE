import './App.css';
import Router from './router/router';
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Store/Store';

function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <RouterProvider router={Router} />

    </Provider>

  );
}

export default App;
