import './Navbar.css'
import { useParams } from "../../context/Context";

export default function Navbar() {

    const { mode, setmode, algo, setalgo, setres, setrun } = useParams();

    return (
        <div className='navbar'>
            <div className='container'>
                <button type='button' className={['btn', 'btn-primary', mode === 'setstart' ? 'selected' : ''].join(' ')}
                    onClick={() => {
                        if (mode === 'setstart') setmode(null)
                        else { setmode('setstart'); }
                    }}
                >
                    <i className='bi bi-geo-alt'></i>
                </button>
                <button type='button' className={['btn', 'btn-primary', mode === 'settarget' ? 'selected' : ''].join(' ')}
                    onClick={() => {
                        if (mode === 'settarget') setmode(null)
                        else { setmode('settarget'); }
                    }}
                >
                    <i className='bi bi-geo'></i>
                </button>
                <button type='button' className={['btn', 'btn-primary', mode === 'addbricks' ? 'selected' : ''].join(' ')}
                    onClick={() => {
                        if (mode === 'addbricks') setmode(null)
                        else { setmode('addbricks'); }
                    }}
                >
                    <i className='bi bi-bricks'></i>
                </button>
                <button type='button' className={['btn', 'btn-primary', mode === 'addweight' ? 'selected' : ''].join(' ')}
                    onClick={() => {
                        if (mode === 'addweight') setmode(null)
                        else { setmode('addweight'); }
                    }}
                >
                    <i className='bi bi-virus'></i>
                </button>
                <button type='button' className='btn btn-primary' onClick={() => { setres((old) => { return !old; }) }}>
                    <i className='bi bi-arrow-counterclockwise'></i>
                </button>
                <button type='button' className='btn btn-primary' onClick={() => { setrun((old) => { return !old; }) }}>
                    <i className='bi bi-caret-right-fill'></i>
                </button>
                <div>
                    <select className='form-select' aria-label='Default select example' value={algo} onChange={(e) => {
                        setalgo(e.target.value);
                    }}>
                        <option value='dijikstra'>Dijikstra</option>
                        <option value='bds'>BDS</option>
                        <option value='bfs'>BFS</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
