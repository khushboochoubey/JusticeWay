const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Create a new report
router.post('/api/reports', async (req, res) => {
    try {
        const { name, location, department, description, status } = req.body;
        const newReport = new Report({ name, location, department, description, status });
        const savedReport = await newReport.save();
        res.status(201).json(savedReport);
    } catch (error) {
        res.status(500).json({ message: 'Error creating report', error });
    }
});

// Get all reports
router.get('/api/reports', async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reports', error });
    }
});

// Update a report status
router.put('/api/reports/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedReport = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json(updatedReport);
    } catch (error) {
        res.status(500).json({ message: 'Error updating report', error });
    }
});

module.exports = router;

