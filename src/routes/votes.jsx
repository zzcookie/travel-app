import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Vote from '../components/vote';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
function Votes() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/api'
        // , {
        //     mode: 'cors',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                // if (!response.json) {
                //     throw new Error(
                //         `no data`
                //     );
                // }
                return response.json();
            })
            .then((actualData) => {
                console.log('start'+actualData);
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <Container>
            <Form>{data.map((x, i) => Vote(x, i))}</Form>
            {data[0]["edit_count"]}
        </Container>
    );
}
export default Votes;