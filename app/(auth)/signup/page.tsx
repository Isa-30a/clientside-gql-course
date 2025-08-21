'use client'

import { SignupMutation } from '@/gql/gqlSignupMutation'
import { setToken } from '@/utils/token'
import { Button, input, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useMutation } from 'urql'

const SignupPage = () => {
  const [state, setState] = useState({ password: '', email: '' })
  const router = useRouter()
  // you need to tell them when they should be run. Mutations have to be triggered by some functions
  //by default queries run when the component is rendered.
  const [signUpResult, signup] = useMutation(SignupMutation)
  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    //remember this object should have what the mutation has as param name
    //state is an object that has the same values we need to run the SignUp - createUser
    const result = await signup({ input: state })
    // All the request give you a status code 200
    //So... result status code will be 2000
    if (result.data.createUser) {
      setToken(result.data.createUser.token)
      router.push('/')
    }
  }

  return (
    <div className="bg-white rounded-md border p-4 w-full shadow-sm">
      <div className="text-2xl text-black/70">Sign up</div>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-4">
        <div>
          <Input
            value={state.email}
            onValueChange={(v) => setState((s) => ({ ...s, email: v }))}
            variant="faded"
            label="Email"
            classNames={{
              inputWrapper: 'bg-slate-50 border-slate-100',
            }}
          />
        </div>
        <div>
          <Input
            variant="faded"
            value={state.password}
            onValueChange={(v) => setState((s) => ({ ...s, password: v }))}
            label="Password"
            type="password"
            classNames={{ inputWrapper: 'bg-slate-50 border-slate-100' }}
          />
        </div>
        <div className="text-end">
          <Button type="submit" variant="solid" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
