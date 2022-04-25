import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { fetchDependenciesProvider } from '../providers/Dependency'

const defaultState = {
    dependencyList: [],
    filters: {
        page: 1,
        pageSize: 6
    }
}

let dependencyStore = (set) => ({
    dependency: {
        ...defaultState
    },
    fetchDependencies: (page = 1, pageSize = 6) => {
        fetchDependenciesProvider(page, pageSize).then(
            response => {
                const dependencies = response.data.data
                set(state => ({
                    ...state,
                    dependency: {
                        ...state.dependency,
                        dependencyList: dependencies
                    }
                }))
            }
        ).catch(
            error => {
                throw error
            }
        )
    },
    setPage:
        page => 
            set(state => ({ 
                dependency: {
                    ...state.dependency,
                    filters: {
                        ...state.dependency.filters,
                        page
                    }
                }
            })),
    setPageSize:
        pageSize => 
            set(state => ({ 
                dependency: {
                    ...state.dependency,
                    filters: {
                        ...state.dependency.filters,
                        pageSize
                    }
                } 
            })),
    clearStore:
        () => 
            set(() => ({
                dependency: {
                    ...defaultState
                }
            }))
})

dependencyStore = devtools(dependencyStore)

export const useDependencyStore = create(dependencyStore)