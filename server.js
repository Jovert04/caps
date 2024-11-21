const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample data for parking slots and camera IPs
let parkingSlots = {
    1: false,  // Free
    2: true,   // Occupied
    3: false,
    4: true,
    5: false,
    6: false,
    7: true,
    8: false,
    9: true,
    10: false,
    11: false,
    12: false,
    13: true,
    14: false,
    15: true,
    16: false,
    17: false,
    18: false
};

const cameraIPs = [
    "http://192.168.1.21:",  // Channel 1
    "http://camera-ip-address-2",  // Channel 2
    "http://camera-ip-address-3",  // Channel 3
    "http://camera-ip-address-4",  // Channel 4
    "http://camera-ip-address-5",  // Channel 5
    "http://192.168.1.21:",    // Channel 6
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
    console.log(`Server is running on http://smartparking1.atwebpages.com`);
});
