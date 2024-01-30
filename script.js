//your JS code here. If required.
// Adding getKeys method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Creating student object
const student = {
    name: "John"
};

// Test getKeys method
console.log(student.getKeys()); // Output: ['name']
