import { createStore } from 'redux';

const dummyReducer = () => {
    return 100
}

const store = cretateStore(dummyReducer);

export default store;