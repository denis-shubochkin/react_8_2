
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

    return (
        <div className="Data">
            Data result:
                <div className="Result">
                {loading ? 'Loading...' : null}
                {data.status}
                </div>
        </div>
        
    )
}