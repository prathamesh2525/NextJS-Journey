import React, { useEffect, useState } from "react"
import Link from "next/link"
import useSWR from "swr"

import styles from "../../styles/user.module.css"

const userFetcher = (...args) => fetch(...args).then((res) => res.json())

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users/", userFetcher)
  console.log(data)
  if (error) {
    return <h1>Error Found...</h1>
  }

  if (!data) return <h1>loading....</h1>
  return (
    <div>
      <h1>This is User Page</h1>
      {data.users &&
        data.users.map((user) => (
          <Link className={styles.text} href={`/user/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  )
}

export default UserPage
