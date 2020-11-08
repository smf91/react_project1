import React from 'react'


//HOC это функция котороая принимает компонент на входе и возвращает другой компонент
export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>LOADING</div>}>
            <Component {...[props]} />
        </React.Suspense>
    }
}
