import "./Button.css";

const Button = ({symbol,color,handleclick}) => {

  return (
     
    <div className="btn1" onClick={()=> handleclick(symbol)} style={{backgroundColor : color}}>
      {symbol}
    </div>
  )
}

export default Button
