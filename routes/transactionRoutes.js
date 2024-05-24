const express = require('express')
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction } = require('../controllers/transactionCtrl')


const router = express.Router()

//routes
//add transaction POST method
router.post('/add-transaction', addTransaction);
//edit transaction POST method
router.post('/edit-transaction', editTransaction);

//delete transaction POST method
router.post('/delete-transaction', deleteTransaction);

//get transaction
router.get('/get-transaction', getAllTransaction);

module.exports = router;