import { Client } from 'pg';

const dbName = "cookbook";
const client = new Client(`postgres://localhost:54321/${dbName}`);

export default client;
