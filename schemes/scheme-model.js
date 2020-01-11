const db = require('../data/dbconfig.js')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id})
}

function remove(id) {
    return db('schemes').where({id}).del()
}

async function add(item) {
    const [id] = await db('schemes').insert(item)
    return db('schemes').where({id})
}

async function update(item, id) {
    await db('schemes').where({id}).update(item)
    const newitem = await db('schemes').where({id})
    return updated
}