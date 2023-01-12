/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import React from "react"

const index = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is Users default Page</h1>
      {/* <button
        onClick={(e) => router.push(`/user/${router.query.username}/settings`)}
      >
        Open Settings Page
      </button> */}
      <button
        onClick={(e) =>
          router.push({
            pathname: "/user/[username]/settings",
            query: { username: router.query.username },
          })
        }
      >
        Open Settings Page
      </button>
      <button onClick={(e) => router.replace("/")}>Go to Home</button>
      <button onClick={(e) => router.reload}>Reload</button>
    </div>
  )
}

export default index
