const Ingredient = ({name, quantity, handleButtonClick}) => {
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