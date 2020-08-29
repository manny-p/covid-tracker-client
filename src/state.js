import {createGlobalState} from 'react-hooks-global-state';

const initialState = {
    user: null,
    token: null
}

const {useGlobalState} = createGlobalState(initialState)

export default useGlobalState
