
export default class Song {
    constructor({
        id,
        mid,
        singer,
        name,
        album,
        duration,
        image,
        url,

    }) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
}
export function createSong(musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: fileSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // url: `https://api.bzqll.com/music/tencent/url?key=579621905&id=&br=320`
        url: `https://api.bzqll.com/music/tencent/url?key=579621905&id=${musicData.songmid}&br=128`,
    })
}

function fileSinger(singer) {
    let ret = []
    if (!singer) {
        return ''
    }
    singer.forEach((info) => {
        ret.push(info.name)
    });
    return ret.join("/")
}

