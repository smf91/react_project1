import profileReducer, { createPostAC } from './profile-reducer'
import React from 'react'

// в качестве строкового параметра описывает назначение теста
it('new post should be added', () => {
    // 1. START DATA
    // формируем action
    let action = createPostAC("test new post text")
    // формируем initial state
    let state = {
        postsData: [
            { id: 1, message: "first text posts", likesCount: 12 },
            { id: 2, message: "second text posts", likesCount: 23 }
        ]
    }
    // 2. ACTION
    let newState = profileReducer(state, action)

    // 3. EXPECTATION
    //  первым указываем то хначение которое мы хотим сравнить
    //  второе с чем сравнить
    expect(newState.postsData.length).toBe(3)
});


