class Camera {
    constructor(options) {
        this.target;
        this.radius;
        this.angle = 1;
        this._3D = 0;
        if (typeof options === 'object')
            for (var key of Object.keys(options)) {
                this[key] = options[key];
            }
    }
}