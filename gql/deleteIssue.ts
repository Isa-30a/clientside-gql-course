import { gql } from '@urql/next'

export const DeleteUSerMutation = gql`
  mutation DeleteIssue($deleteIssueId: ID!) {
    deleteIssue(id: $deleteIssueId)
  }
`
