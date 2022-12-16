import { PayloadAction } from '@reduxjs/toolkit'
import { createFeature } from 'store'

import { IGithubUser, IGithubUsersFeatureState } from './types'

const featureName = 'github-users'
const initialState: IGithubUsersFeatureState = { users: [] }

export const githubUsersFeature = createFeature(featureName, initialState, {
  updateUsers: (state: IGithubUsersFeatureState, action: PayloadAction<IGithubUser[]>) => ({
    ...state,
    users: action.payload,
  }),
})

export const selectGithubUsers = (store: { [featureName]: IGithubUsersFeatureState }) => store[featureName].users
