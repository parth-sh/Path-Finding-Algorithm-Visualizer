/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useRef, useEffect } from "react";
import initializeGrid from "../utils/InitializeGrid";

const context = createContext();

export const useParams = () => {
    return useContext(context);
}

export const ParamsProvider = function ({ children }) {

    const [mode, setmode] = useState(null);
    const [algo, setalgo] = useState("dijikstra");
    const [run, setrun] = useState(false);
    const [grid, setgrid] = useState(initializeGrid(50, 25));
    const [editing, seteditflag] = useState(false);
    const [res, setres] = useState(false);
    const start = useRef({ x: 25, y: 12 });
    const end = useRef({ x: 48, y: 23 });

    useEffect(() => {
        setgrid(initializeGrid(50, 25))
    }, [res])

    return (<div>
        <context.Provider value={{
            mode, setmode, algo, setalgo, run, setrun, grid, setgrid, editing, seteditflag, res, setres, start, end
        }}>
            {children}
        </context.Provider>
    </div>);
}