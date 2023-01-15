import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UserInfoPage = (id) => {
  const { data, error, isLoading } = useSWR(`/users/2`, fetcher)
  if (error) {
    return <h1>Error Found...</h1>
  }

  if (isLoading) return <h1>loading....</h1>
  return (
    <div>
      <h2>{data.userInfo?.firstName}</h2>
      <h2>{data.userInfo?.email}</h2>
    </div>
  )
}

export default UserInfoPage
