export function Hello1(props) {
  const {to} = props;
  console.log("Hello1");

  return (
    <>
      <div>hello {to}</div>
    </>
  )
}