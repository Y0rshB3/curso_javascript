function MediaPlayer(config) {
    this.media = config.el;
};

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

MediaPlayer.prototype.togglePlayPause = function () {
    console.log(this.media.paused)
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default MediaPlayer;