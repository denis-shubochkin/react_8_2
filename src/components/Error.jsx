import useJsonFetch from '../hooks/useJsonFetch';

export default function Error() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

    return (
        <div className="Error">
            Error result:
                <div className="Result">
                {loading ? 'Loading...' : null}
                {error}
                </div>
        </div>
        
    )
}