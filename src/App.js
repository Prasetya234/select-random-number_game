import './App.css';

function App() {
  const select = (param) => {
    document.getElementById("slc").innerHTML = param;
    const res = Math.floor(Math.random() * 6) + 1;
    document.getElementById("rnd").innerHTML = res;
    if (param === res) {
      document.getElementById("yesOrNo").innerHTML = "Selamat kamu benar";
      document.getElementById("yesOrNo").style.color = "green";
    } else {
      document.getElementById("yesOrNo").innerHTML = "Kamu salah";
      document.getElementById("yesOrNo").style.color = "red";
    }
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Pilih angka dan coba ke beruntunganmu</h1>
      <h2 id="yesOrNo" style={{ textAlign: 'center' }} />
      <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '300px', padding: '15px', border: '2px solid red' }}>
          <p style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }} id="rnd">NaN</p>
        </div>
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Pilihan kamu</p>
      <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }} id="slc" />
      <div className="container">
        <button onClick={() => select(1)}>1</button>
        <button onClick={() => select(2)}>2</button>
        <button onClick={() => select(3)}>3</button>
        <button onClick={() => select(4)}>4</button>
        <button onClick={() => select(5)}>5</button>
        <button onClick={() => select(6)}>6</button>
      </div>
    </div>
  );
}

export default App;
