const bcrypt = require('bcrypt');

const generatePassword = async password => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
};

const comparePassword = async (password, hash) => await bcrypt.compare(password, hash);

let password = '$2a$10$A6S8IHzVNNXGaMz0CAZ67ueeikrRQEOy4hvtX4dniP8ghm93VmrY6';

(async function(){
    let result = await comparePassword('demo', password);
    console.log(result);
})();