import './App.css'
import UiPanel from './stores/UiPanel';
// import Lab5 from './component/Lab5'
// import Lab6 from './component/Lab6'
// import Lab7 from './component/Lab7';
// import Lab8 from './component/Lab8';
// import Lab9 from './component/Lab9';

function App() {

  return (
    <>
      <div>
        <UiPanel />
        {/* <Lab9 /> */}
        {/* {<Lab8 />} */}
        {/* {<Lab7 />} */}
        {/* {<Lab6 />} */}
        {/* {<Lab5 />} */}
        <style>{css}</style>
      </div>
    </>
  )
}

export default App

const css = `
  .error { color: #c0392b; margin: 0; }
  input { padding: 8px; border: 1px solid #ddd; border-radius: 6px; }
  label { font-weight: 600; }
  button { padding: 10px 14px; border: none; border-radius: 8px; background: #0d6efd; color: white; }
`;