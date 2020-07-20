import React from "react";
import Demo from "./Components/DemoComponent/Demo";
import DemoClass from "./Components/DemoComponent/DemoClass";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import ExRenderMap from "./RenderWithMap/ExRenderMap";
import DemoProps from "./Props/DemoProps";
import BT2productList from "./Props/BT2productList/BT2productList";
import DemoPropsFunction from "./Props/DemoPropsFunction/DemoPropsFunction";
import BTGH from "./Props/BaiTapGioHang/BTGH";
function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/*<DataBinding />*/}
      {/* <p className="title">Hello hello</p> */}
      {/*<RenderWithMap></RenderWithMap>*/}
      {/*<ExRenderMap />*/}
      {/*<DemoProps />*/}
      {/*<BT2productList />*/}
      {/* <DemoPropsFunction /> */}
      <BTGH />
    </div>
  );
}

export default App;
