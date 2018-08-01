#iotdb


## Usage

```
const db = require('iotdb');

db(config).then(database=>{
    const {Agent, Metric}=database
}).catch(e=>{ console.error(e) })

```