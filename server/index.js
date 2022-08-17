/* drue gave a possible fix for killing ghost terminals listening on a port

-in bash
sudo netstat -tulpn | grep LISTEN

related --- look into maybe making an extension or script to check if there's an open server before closing vs code and terminate if so
*/

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getHouses ,
    deleteHouse ,
    creatHouse ,
    updateHouse
} = ('./controller')



const SERVER_PORT = 9009;
app.listen(SERVER_PORT , () => console.log(`listening on port ${SERVER_PORT}`));