const Ingredient = ({name, quantity}) => {
  return (
    <>
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
        </tr>
    </>
  )
}

export { Ingredient }