import { useMutation } from 'urql'
import Status from './Status'
import { DeleteUSerMutation } from '@/gql/deleteIssue'
import { Spinner } from '@nextui-org/spinner'

const Issue = ({ issue }) => {
  const displayId = issue.id.split('-').pop().slice(-3)
  const [{ data, error, fetching }, deleteIssue] =
    useMutation(DeleteUSerMutation)

  return (
    <div className="px-4 h-[40px] border-b flex items-center hover:bg-slate-50 gap-4">
      <span className="text-sm text-slate-300 w-[80px]">
        {`PAR-${displayId}`.toUpperCase()}
      </span>
      <Status status={issue.status} issueId={issue.id} />
      <span>{issue.name}</span>
      <button
        className="ml-auto text-red-500 hover:underline text-sm"
        onClick={async () => {
          {
            fetching && <Spinner></Spinner>
          }

          {
            error && <div>Error</div>
            console.log(error)
          }
          const result = await deleteIssue({
            deleteIssueId: issue.id,
          })
        }}
      >
        Eliminar
      </button>
    </div>
  )
}

export default Issue
