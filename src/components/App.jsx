import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../page/NoFound";
import Item from "../page/Item";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Item />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App