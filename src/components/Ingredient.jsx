const Ingredient = ({name, quantity, handleButtonClick}) => {
  return (
    <>
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><button onClick={handleButtonClick}>BUTTON</button></td>
        </tr>
    </>
  )
}

export { Ingredient }