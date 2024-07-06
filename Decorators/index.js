// index.js
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Example {
    @readonly
    method() {
        console.log('This method is read-only');
    }
}

const example = new Example();
example.method(); // Output: This method is read-only