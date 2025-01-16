import React from 'react'

const ShoeCard = ({imageURL,
    changeBigShoeImage, bigShoeImg
} : {imageURL: String, changeBigShoeImage: String, bigShoeImg: String}) => {
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imageURL
        ? 'border-coral-red'
        : 'border-transparent'
    } cursor-pointer max-sm:flex-1
    `
    }>

    </div>
  )
}

export default ShoeCard