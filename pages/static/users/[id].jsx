import React from "react"

const UserPage = (props) => {
  return (
    <div>
      <h1>Profile page of {props.data.firstName}</h1>
    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users/`)).json()
  const allUsersIds = data.users.map((user) => user.id)

  console.log("All USers Ids", allUsersIds)
  
  return {
    paths: allUsersIds.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()
  return {
    props: {
      data,
    },
  }
}

export default UserPage
