const kafka=require('node-rdkafka');
const stream=kafka.Producer.createWriteStream(
    {'metadata.broker.list':'localhost:9092'},
    {},
    {topic:'test'}
);

function queueMessage() {
    const success=stream.write(Buffer.from('hi'));
    if (success)
        {
            console.log("message wrote successfully to the stream");
        }
    else{
        console.log("something went wrong");
    }
}
setInterval(()=>{
    queueMessage();
},3000)