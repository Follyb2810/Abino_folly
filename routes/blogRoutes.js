const express = require('express')
const { createBlog, UpdateBlog, DeleteBlog } = require('./../controller/blogControler')
const {protectedRoutes} =require('./../controller/authController')
// const { createBlog, UpdateBlog, DeleteBlog } = require('../controller/blogControler')

const router = express.Router()


router.route('/create-post')
        .post(protectedRoutes,createBlog)
router.route('/:id')
                .put(protectedRoutes,UpdateBlog)
                .delete(protectedRoutes,DeleteBlog)
            
            


module.exports = router