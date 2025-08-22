import { gql } from '@urql/next'

export const EdditIssueMutation = gql`
  mutation EditIssue($input: EditIssueInput!) {
    editIssue(input: $input) {
      content
      id
      name
      status
    }
  }
`
