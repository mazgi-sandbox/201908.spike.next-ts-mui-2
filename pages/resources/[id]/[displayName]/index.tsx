import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id, displayName } = router.query
  return (
    <div>
      show and edit the specific resource by (id)"{id}" and (name)"{displayName}".
    </div>
  )
}
