import ASCIIText from './components/ASCIIText';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-5xl px-6">
        <div className="ascii-banner">
          <ASCIIText
            text="disfigurement"
            asciiFontSize={7}
            textFontSize={320}
            textColor="#fdf9f3"
            planeBaseHeight={12}
            enableWaves={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
