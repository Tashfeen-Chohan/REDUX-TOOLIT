import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readPosts } from '../features/postSlice'

const Read = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(readPosts())
  })

  return (
    <div>
      All Posts
    </div>
  )
}

export default Read
