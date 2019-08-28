import { useRouter } from 'next/router'
import ProjectDetailTemplate from '../../../../components/templates/ProjectDetailTemplate'

export default () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <ProjectDetailTemplate id={Number(id)}>
    </ProjectDetailTemplate>
  )
}
