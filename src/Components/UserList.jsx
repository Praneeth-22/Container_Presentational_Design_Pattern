import React from 'react'

function UserList({users,loading,error}) {
    if(loading) return <div>...Loading</div>
    if(error) return <div>Something went wrong!</div>
  return (
    <div>
      
    </div>
  )
}

export default UserList
