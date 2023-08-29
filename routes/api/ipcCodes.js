const express = require('express');
const IPCCode = require('../../models/ipcCode'); // Make sure the path is correct

const router = express.Router();

// GET all IPC Codes
router.get('/', async (req, res) => {
  try {
    const codes = await IPCCode.find({});
    res.json(codes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST new IPC Code
router.post('/', async (req, res) => {
  const { code, description } = req.body;
  try {
    const newCode = new IPCCode({
      code,
      description,
    });
    await newCode.save();
    res.json(newCode);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE an IPC Code by ID
router.delete('/:id', async (req, res) => {
  try {
    await IPCCode.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// PUT (Update) an IPC Code by ID
router.put('/:id', async (req, res) => {
  const { description } = req.body;
  try {
    const ipc = await IPCCode.findById(req.params.id);

    if (!ipc) {
      return res.status(404).json({ msg: 'IPC not found' });
    }

    ipc.description = description;

    await ipc.save();

    res.json(ipc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
