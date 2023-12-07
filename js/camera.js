class Camera {
    constructor(options) {
        this.target;
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
}