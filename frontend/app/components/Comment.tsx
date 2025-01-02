"use client"
import React from 'react'
import {FastCommentsCommentWidget} from 'fastcomments-react'

function Comment() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            Leave a Reply
        </h3>
        <FastCommentsCommentWidget tenantId="k_7lucKQuXy" />
    </div>
  )
}

export default Comment
