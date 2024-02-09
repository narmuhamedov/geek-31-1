import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchApis} from './redux/apiExplorerSlice';

function App() {
    const dispatch = useDispatch();
    const apiList = useSelector((state) => state.apiExplorer.apiList);
    const isLoading = useSelector((state) => state.apiExplorer.isLoading);

    const handleFetchApis = () => {
        dispatch(fetchApis());
    };

    return (
        <div className="App">
            <h1>Домашка 7</h1>
            <button onClick={handleFetchApis} disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Получить'}
            </button>
            <ul>
                {apiList.map((api) => (
                    <li key={api.API}>{api.API}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
