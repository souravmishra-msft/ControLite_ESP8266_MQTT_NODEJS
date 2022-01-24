const router = require('express').Router();
const mqtt = require('mqtt');

// Connect publisher to the broker
const client = mqtt.connect('mqtt:localhost:1883');
const topic = 'TESTTopic123';
let message = '';





router.get('/', (req, res) => {
    res.render('index');
});

router.post('/status_check', (req, res) => {
    message = req.body.state;
    try {
        res.status(200).json({'status': "OK", 'message': req.body.state});
    } catch (err) {
        res.status(400).json({'status': "FAILED", 'error': err});
    }
});

client.on('connect', () => {
    console.log(`Publisher is ready`);
    setInterval(() => {
        client.publish(topic, message);
        console.log(`Message sent from Publisher: `, message);
    }, 3000);
});

module.exports = router;