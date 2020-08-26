import React from 'react';
import {createGlobalState} from 'react-hooks-global-state';

const initialState = {
    user: {}
}

// const state = createGlobalState(initialState)
// state.useGlobalState

const {useGlobalState} = createGlobalState(initialState)

// export default state.useGlobalState
export default useGlobalState
