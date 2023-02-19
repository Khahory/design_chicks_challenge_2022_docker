import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../page/NoFound";
import ItemContainer from "../page/ItemContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ItemContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App