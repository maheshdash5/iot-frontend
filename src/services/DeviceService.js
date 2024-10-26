import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/devices";

export const listDevices = () => axios.get(REST_API_BASE_URL);

export const createDevice = (device) => axios.post(REST_API_BASE_URL, device, { headers: {'Content-Type': 'application/json'}, transformRequest: [(data) => JSON.stringify(data)]});
