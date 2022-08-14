import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/main';
import Error from './components/Error/Error';
import DicionaryPage from './pages/dictionary';
import AudioCallGamePage from './pages/audioCallGame';
import SprintGamePage from './pages/sprintGame';

import { useGetWordQuery, useGetWordsQuery } from './app/wordsApi';
import { useCreateUserMutation } from './app/userApi';

function App() {
  const words = useGetWordsQuery({
    page: 2,
    group: 5,
  });

  const word = useGetWordQuery({
    id: '5e9f5ee35eb9e72bc21af4a0',
  });

  const [newUser] = useState({
    name: 'Olegdfds',
    email: 'mmail@mail.ru',
    password: '1234fsdfsd5',
  });

  const [createUser] = useCreateUserMutation();

  const handleAddUser = async () => {
    if (newUser) {
      await createUser({ body: newUser }).unwrap();
    }
  };

  if (word.isLoading) return <h1>Loading...</h1>;

  console.log('words', words.data);
  console.log('word request', word.data);

  return (
    <div className="App">
      <button onClick={handleAddUser} type="button">
        addUser
      </button>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dictionary" element={<DicionaryPage />} />
        <Route path="/audioCall" element={<AudioCallGamePage />} />
        <Route path="/sprint" element={<SprintGamePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
