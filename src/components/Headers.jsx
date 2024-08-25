const Headers = () => {
  const textStyle = { fontSize: '14px', color: 'white' };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'black', padding: '20px 80px' }}>
      <div style={{ display: 'flex',alignItems:"center", gap:"48px"}}>
        <div style={{  ...textStyle }} className="hover:underline underline-offset-8">Home</div>
        <div style={{  ...textStyle }} className="hover:underline underline-offset-8">Work</div>
        <div style={{  ...textStyle }} className="hover:underline underline-offset-8">Contact Us</div>
      </div>

      <img src="logo192.png" width="30px" alt="logo"></img>
    </div>
  );
};
export default Headers;
