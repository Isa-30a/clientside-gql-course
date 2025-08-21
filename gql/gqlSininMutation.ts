import { gql } from '@urql/next'

// you will create a file per mutation or query

// this a mutation (something like update or send) from /api/graphql

export const SigninMutation = gql`
  mutation Mutation($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`

//NOTE: the line 8 $input must be the same name given to the input example
// {
//   "input": {
//     "email": "io@test.com",
//     "password": "password"
//   }
// }

// you can change input to another name like "a" or "userCredentials" but must be the same down there as input
