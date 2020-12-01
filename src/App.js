/*
 * @Description: 
 * @author: wangxiuting
 * @Date: 2020-11-30 11:43:23
 * @lastEditors: wangxiuting
 * @LastEditTime: 2020-11-30 14:07:08
 * @FilePath: \my-home\src\App.js
 * @GlobalData: data
 */
import React from 'react';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './router/router'

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}
export default App;