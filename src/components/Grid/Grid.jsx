/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useParams } from "../../context/Context";
import './grid.css'

export default function Grid() {
    const { grid, setgrid, editing, seteditflag, mode, start, end, run, res, algo } = useParams();

    const [refarray, mm] = useState(getrefarray(grid));

    function getrefarray(grid) {
        if (grid === null) return;
        let array = []
        grid.forEach((elem) => {
            elem.forEach((child) => {
                array.push(useRef());
            })
        })
        return array;
    }

    return (<div className='board'>
        {refarray.map((elem, index) => {
            let classList = ['cell'];

            let xindex = Math.floor(index / 50)
            let yindex = index % 50
            let cell = grid[xindex][yindex]
            let newgrid = null

            if (cell.iswall) {
                classList.push('wall');
            }

            return <div key={`${index}`} ref={elem} className={classList.join(' ')}
                onMouseDown={() => {
                    seteditflag(true);
                }}
                onMouseUp={() => {
                    seteditflag(false);
                }}
                onMouseMove={() => {
                    if (!editing) return;
                    if (cell.isstart || cell.istarget) return;
                    switch (mode) {
                        case 'setstart':
                            newgrid = grid.map((x) => {
                                return x.map((y) => {
                                    if (!y.isstart) return y
                                    return { ...y, isstart: false }
                                })
                            })
                            newgrid[xindex][yindex] = { ...newgrid[xindex][yindex], isstart: true, istarget: false, weight: 1, iswall: false }
                            start.current = { x: xindex, y: yindex }
                            setgrid(newgrid)
                            break;
                        case 'settarget':
                            newgrid = grid.map((x) => {
                                return x.map((y) => {
                                    if (!y.istarget) return y;
                                    return { ...y, istarget: false }
                                })
                            })
                            newgrid[xindex][yindex] = { ...newgrid[xindex][yindex], istarget: true, isstart: false, weight: 1, iswall: false }
                            end.current = { x: xindex, y: yindex }
                            setgrid(newgrid)
                            break;
                        case 'addbricks':
                            newgrid = grid.slice()
                            newgrid[xindex][yindex] = { ...newgrid[xindex][yindex], weight: 1, iswall: true }
                            setgrid(newgrid)
                            break;
                        case 'addweight':
                            newgrid = grid.slice()
                            newgrid[xindex][yindex] = { ...newgrid[xindex][yindex], weight: 5, iswall: false }
                            setgrid(newgrid)
                            break;
                        default:
                            return;
                    }
                }}
            >
                {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
                {cell.isstart ? <i className="bi bi-geo-alt"></i> : null}
                {cell.istarget ? <i className="bi bi-geo"></i> : null}
            </div>
        })}
    </div>);
}
