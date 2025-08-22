import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query Issues {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`
