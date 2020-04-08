import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');


export default function() {
    const gameId = Math.floor(Math.random() * 10000000);
    check(http.get(`http://localhost:3003/${gameId}/updates`), {
        'status is 200': r => r.status == 200
    }) || errorRate.add(1);
}