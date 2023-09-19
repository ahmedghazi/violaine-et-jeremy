import React from "react"

type Props = {
  input: any[]
}

const ColorPalette = ({ input }: Props) => {
  const items = input.length >= 3 ? input.slice(2, input.length) : []
  return (
    <div className="image-color-palette grid grid-cols-3 z-50 text-sm">
      {items.map((item, i) => (
        <div
          key={i}
          className="aspect-square center-x-y ellipsis "
          style={{
            backgroundColor: item.hex,
          }}
        >
          <span className="opacity-0">...</span>
        </div>
      ))}
    </div>
  )
}

export default ColorPalette
