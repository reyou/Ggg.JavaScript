class GggGame {
    constructor(name, releaseDate) {
        this.Name = name;
        this.ReleaseDate = releaseDate;
    }
    toString() {
        gggCore.log(`GggGame Name: ${this.Name}, releaseDate: ${this.ReleaseDate}.`);
    }
}

