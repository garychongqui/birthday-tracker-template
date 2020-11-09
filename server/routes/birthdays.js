const router = require('express').Router(),
const {
    getAllBirthdays,
}= require('../../controllers/birthdayController');

router.route('/birthdays').get(getAllBirthdays);
router.route('/:id').post();
router.route('/birthdays/:id').get();
router.route('/birthdays/:id').put();




module.exports = router;