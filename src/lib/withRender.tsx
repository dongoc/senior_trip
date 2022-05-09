import { ComponentType, useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch } from 'react-redux'

type ActionCreator = () => Action

export const withRender =
  (component: ComponentType, initAction?: ActionCreator | null, cleanupAction?: ActionCreator | null) => () => {
    const dispatch = useDispatch()
    const Component = component

    useEffect(() => {
      if (initAction) dispatch(initAction())

      return () => {
        if (cleanupAction) dispatch(cleanupAction())
      }
    }, [])

    return <Component />
  }
