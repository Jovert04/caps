const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

const cameraIPs = [
    "http://192.168.1.21:",  // Channel 1
    "http://camera-ip-address-2",  // Channel 2
    "http://camera-ip-address-3",  // Channel 3
];

// Endpoint to get parking slot statuses
app.get('/api/parking-slots', (req, res) => {
    res.json(parkingSlots);
});

// Endpoint to update a specific parking slot status
app.put('/api/parking-slots/:slotId', (req, res) => {
    const slotId = req.params.slotId;
    const { occupied } = req.body;

    if (parkingSlots[slotId] !== undefined) {
        parkingSlots[slotId] = occupied;
        res.json({ message: `Slot ${slotId} updated to ${occupied ? 'occupied' : 'free'}.` });
    } else {
        res.status(404).json({ message: 'Slot not found.' });
    }
});

// Endpoint to get camera IPs
app.get('/api/camera-ips', (req, res) => {
    res.json(cameraIPs);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://smartparking1.atwebpages.com/index.html`);
});
