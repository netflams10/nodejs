module.exports.getCustomerSync = function (id) {
    console.log("getting customer details...");
    return { id: id, points: 11 }
}




module.exports.getCustomer = async function (id) {
    return new Promise((resolve, reject) => {
        console.log("reading data from MongoDB database")
        resolve({ id: id, points: 11 })
    })
} 