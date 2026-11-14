import axios from 'axios';

const DbUrl = "https://chatapp-b1c54-default-rtdb.firebaseio.com";

const SANode = "/StudentAccount/";
const json = ".json";

export async function createUserAccount(student) {
    const response = await axios.post(DbUrl + SANode + json, student);
    return response.data;
}

export async function loadData() {

}