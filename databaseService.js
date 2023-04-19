class DatabaseService{
    save(email, price, timestamp){
        console.log(`Zapisuję do bazy danych: ${email}, ${price}, ${timestamp}`);
    }   
}
module.exports = DatabaseService;