/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

const settings = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is settings page for {router.query.username}</h1>
    </div>
  )
}

export default settings
