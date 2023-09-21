import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import "./App.css";

function App() {
  return (
    <>
      <div className="overlay custom-styles">
        <Excalidraw>
          <MainMenu>
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.ToggleTheme />
          </MainMenu>
        </Excalidraw>
      </div>
    </>
  );
}

export default App;
