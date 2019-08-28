import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      show and edit the specific playlist by (id)"{id}".
    </div>
  )
}
