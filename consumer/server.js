const kafka=require('node-rdkafka');
const consumer=kafka.KafkaConsumer(
    {
        'group.id':'kafka',
        'metadata.broker.list':'localhost:9092',
    },{},
);

consumer.connect();
consumer.on('ready',()=>
{
    console.log("consumer ready")
    consumer.subscribe(['test']);
    consumer.consume();
});
consumer.on('data',(data)=>
{
    console.log(`recieved message ${data.value}`);
});

