const router=require('express').Router();
const auth=require('../middleware/authMiddleware');

const {
createGrievance,
getGrievances,
getSingle,
updateGrievance,
deleteGrievance,
searchGrievance
}
=require('../controllers/grievanceController');

router.post('/',auth,createGrievance);
router.get('/',auth,getGrievances);
router.get('/search',auth,searchGrievance);
router.get('/:id',auth,getSingle);
router.put('/:id',auth,updateGrievance);
router.delete('/:id',auth,deleteGrievance);

module.exports=router;